import { SupaDatabase } from '../types/supabase';
import { SystemPrompt } from '@chatbot-ui/core/types/system-prompt';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaGetSystemPrompts: (supabase: SupabaseClient<SupaDatabase>) => Promise<SystemPrompt[]>;
export declare const supaUpdateSystemPrompts: (supabase: SupabaseClient<SupaDatabase>, updatedSystemPrompts: SystemPrompt[]) => Promise<boolean>;
export declare const supaDeleteSystemPrompts: (supabase: SupabaseClient<SupaDatabase>, promptIds: string[]) => Promise<boolean>;
