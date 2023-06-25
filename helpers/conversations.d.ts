import { SupaDatabase } from '../types/supabase';
import { Conversation } from '@chatbot-ui/core/types/chat';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaGetConversations: (supabase: SupabaseClient<SupaDatabase>) => Promise<Conversation[]>;
export declare const supaUpdateConversations: (supabase: SupabaseClient<SupaDatabase>, updatedConversations: Conversation[]) => Promise<boolean>;
export declare const supaDeleteConversations: (supabase: SupabaseClient<SupaDatabase>) => Promise<boolean>;
