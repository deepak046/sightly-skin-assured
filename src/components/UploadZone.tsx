
import { useState, useCallback } from "react";
import { Upload, ImageIcon, FileVideo, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

const UploadZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [result, setResult] = useState<null | {
    condition: string;
    severity: "low" | "medium" | "high";
    needsConsultation: boolean;
    resultImage?: string;
    nextSteps?: string[];
  }>(null);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Reset previous states
    setResult(null);
    
    // Check if file is image or video
    const isFileVideo = file.type.startsWith("video/");
    setIsVideo(isFileVideo);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      setFile(file);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    if (!preview) return;
    
    setIsAnalyzing(true);
    setAnalysisProgress(10);
    
    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setAnalysisProgress(prev => {
          const newProgress = prev + 5;
          return newProgress >= 90 ? 90 : newProgress;
        });
      }, 200);
      
      // Call our Supabase Edge Function
      const { data, error } = await supabase.functions.invoke("analyze-skin", {
        body: { image: preview }
      });
      
      clearInterval(progressInterval);
      setAnalysisProgress(100);
      
      if (error) {
        throw new Error(error.message || "Failed to analyze image");
      }
      
      // Process the result
      setResult({
        condition: data.condition || "Unknown Condition",
        severity: data.severity || "medium",
        needsConsultation: data.needsConsultation || false,
        resultImage: data.resultImage || preview, // Use the annotated image if available
        nextSteps: data.nextSteps || ["Monitor your condition", "Keep the area clean"]
      });
      
      toast.success("Analysis completed successfully");
    } catch (err: any) {
      console.error("Analysis error:", err);
      toast.error(`Analysis failed: ${err.message || "Unknown error"}`);
    } finally {
      setIsAnalyzing(false);
      setAnalysisProgress(0);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setIsVideo(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "high":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="w-full">
      {!file ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-10 text-center transition-colors",
            isDragging 
              ? "border-primary bg-accent/50" 
              : "border-gray-200 hover:border-gray-300 bg-gray-50"
          )}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-4">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Upload file</h3>
            <p className="text-sm text-gray-500 mb-4">
              Drag and drop or click to upload an image or short video
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Supported formats: JPG, PNG, MP4 (max 50MB)
            </p>
            <Button asChild variant="outline" size="sm">
              <label className="cursor-pointer">
                Browse Files
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png,video/mp4"
                  onChange={handleFileChange}
                />
              </label>
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              {isVideo ? (
                <FileVideo className="h-5 w-5 text-primary" />
              ) : (
                <ImageIcon className="h-5 w-5 text-primary" />
              )}
              <span className="font-medium">{file.name}</span>
            </div>
            
            <div className="rounded-md overflow-hidden bg-black/5 border border-gray-100">
              {isVideo ? (
                <video 
                  src={preview || ""}
                  className="mx-auto max-h-72" 
                  controls
                />
              ) : (
                <img 
                  src={result?.resultImage || preview || ""}
                  alt="Preview" 
                  className="mx-auto max-h-72 object-contain" 
                />
              )}
            </div>
            
            {/* Analysis progress */}
            {isAnalyzing && (
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Analyzing image...</span>
                  <span>{analysisProgress}%</span>
                </div>
                <Progress value={analysisProgress} className="h-2" />
              </div>
            )}
            
            {/* Controls */}
            <div className="mt-4 flex flex-wrap gap-3">
              {!result && (
                <Button 
                  onClick={analyzeImage} 
                  disabled={isAnalyzing}
                  className="flex-1"
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Now"}
                </Button>
              )}
              <Button 
                variant="outline" 
                onClick={resetUpload}
                className={!result ? "flex-initial" : "flex-1"}
              >
                Upload Different File
              </Button>
            </div>
          </div>
          
          {/* Results section */}
          {result && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4">Analysis Results</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">Condition</span>
                  <p className="font-medium">{result.condition}</p>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">Severity</span>
                  <p className={cn("font-medium", getSeverityColor(result.severity))}>
                    {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)}
                  </p>
                </div>
                
                {result.nextSteps && result.nextSteps.length > 0 && (
                  <div>
                    <span className="text-sm text-gray-500">Next Steps</span>
                    <ul className="list-disc pl-5 mt-1">
                      {result.nextSteps.map((step, index) => (
                        <li key={index} className="text-gray-700">{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="pt-2">
                  {result.needsConsultation ? (
                    <div className="flex items-start gap-2 text-red-600">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <p>Medical consultation recommended</p>
                    </div>
                  ) : (
                    <p className="text-green-600">
                      No immediate medical consultation needed. Continue to monitor.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadZone;
