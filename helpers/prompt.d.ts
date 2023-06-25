import { SupaDatabase } from '../types/supabase';
import { Prompt } from '@chatbot-ui/core/types/prompt';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaCreatePrompt: (supabase: SupabaseClient<SupaDatabase>, newPrompt: Prompt) => Promise<boolean>;
export declare const supaUpdatePrompt: (supabase: SupabaseClient<SupaDatabase>, updatedPrompt: Prompt) => Promise<boolean>;
export declare const supaDeletePrompt: (supabase: SupabaseClient<SupaDatabase>, promptId: string) => Promise<boolean>;
