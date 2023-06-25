import { SupaDatabase } from '../types/supabase';
import { Conversation } from '@chatbot-ui/core/types/chat';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaCreateConversation: (supabase: SupabaseClient<SupaDatabase>, newConversation: Conversation) => Promise<boolean>;
export declare const supaUpdateConversation: (supabase: SupabaseClient<SupaDatabase>, updatedConversation: Conversation) => Promise<boolean>;
export declare const supaDeleteConversation: (supabase: SupabaseClient<SupaDatabase>, conversationId: string) => Promise<boolean>;
