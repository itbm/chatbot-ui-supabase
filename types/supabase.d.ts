export type Json = string | number | boolean | null | {
    [key: string]: Json;
} | Json[];
export interface SupaDatabase {
    public: {
        Tables: {
            conversations: {
                Row: {
                    folder_id: string | null;
                    id: string;
                    model_id: string;
                    name: string;
                    prompt: string;
                    temperature: number;
                    timestamp: string;
                    user_id: string;
                };
                Insert: {
                    folder_id?: string | null;
                    id?: string;
                    model_id: string;
                    name: string;
                    prompt: string;
                    temperature: number;
                    timestamp?: string;
                    user_id?: string;
                };
                Update: {
                    folder_id?: string | null;
                    id?: string;
                    model_id?: string;
                    name?: string;
                    prompt?: string;
                    temperature?: number;
                    timestamp?: string;
                    user_id?: string;
                };
            };
            folders: {
                Row: {
                    folder_type: string;
                    id: string;
                    name: string;
                    user_id: string;
                };
                Insert: {
                    folder_type: string;
                    id?: string;
                    name: string;
                    user_id?: string;
                };
                Update: {
                    folder_type?: string;
                    id?: string;
                    name?: string;
                    user_id?: string;
                };
            };
            messages: {
                Row: {
                    content: string;
                    conversation_id: string;
                    id: string;
                    role: string;
                    timestamp: string;
                    user_id: string;
                };
                Insert: {
                    content: string;
                    conversation_id: string;
                    id?: string;
                    role: string;
                    timestamp?: string;
                    user_id?: string;
                };
                Update: {
                    content?: string;
                    conversation_id?: string;
                    id?: string;
                    role?: string;
                    timestamp?: string;
                    user_id?: string;
                };
            };
            prompts: {
                Row: {
                    content: string;
                    description: string;
                    folder_id: string | null;
                    id: string;
                    model_id: string;
                    name: string;
                    user_id: string;
                };
                Insert: {
                    content: string;
                    description: string;
                    folder_id?: string | null;
                    id?: string;
                    model_id: string;
                    name: string;
                    user_id?: string;
                };
                Update: {
                    content?: string;
                    description?: string;
                    folder_id?: string | null;
                    id?: string;
                    model_id?: string;
                    name?: string;
                    user_id?: string;
                };
            };
            system_prompts: {
                Row: {
                    content: string;
                    id: string;
                    name: string;
                    user_id: string;
                };
                Insert: {
                    content: string;
                    id?: string;
                    name: string;
                    user_id?: string;
                };
                Update: {
                    content?: string;
                    id?: string;
                    name?: string;
                    user_id?: string;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
