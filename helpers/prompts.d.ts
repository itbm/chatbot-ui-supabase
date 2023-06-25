import { SupaDatabase } from '../types/supabase';
import { Prompt } from '@chatbot-ui/core/types/prompt';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaGetPrompts: (supabase: SupabaseClient<SupaDatabase>) => Promise<Prompt[]>;
export declare const supaUpdatePrompts: (supabase: SupabaseClient<SupaDatabase>, updatedPrompts: Prompt[]) => Promise<boolean>;
export declare const supaDeletePrompts: (supabase: SupabaseClient<SupaDatabase>, promptIds: string[]) => Promise<boolean>;
