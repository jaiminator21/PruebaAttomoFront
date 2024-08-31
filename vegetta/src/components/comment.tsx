"use client";

import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";



export function CommentsBox({ Comment, }: { Comment: any }) {
   

    return (
        <div className="w-full max-w-md">
            
                <Card>
                    <CardTitle>{Comment.content}</CardTitle>
                </Card>

        </div>
    );
}
