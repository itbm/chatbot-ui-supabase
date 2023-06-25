import { SupaDatabase } from '../types/supabase';
import { SystemPrompt } from '@chatbot-ui/core/types/system-prompt';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaCreateSystemPrompt: (supabase: SupabaseClient<SupaDatabase>, newPrompt: SystemPrompt) => Promise<boolean>;
export declare const supaUpdateSystemPrompt: (supabase: SupabaseClient<SupaDatabase>, updatedPrompt: SystemPrompt) => Promise<boolean>;
export declare const supaDeleteSystemPrompt: (supabase: SupabaseClient<SupaDatabase>, promptId: string) => Promise<boolean>;
