import { SupaDatabase } from '../types/supabase';
import { Message } from '@chatbot-ui/core/types/chat';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaCreateMessage: (supabase: SupabaseClient<SupaDatabase>, conversationId: string, newMessage: Message) => Promise<boolean>;
export declare const supaUpdateMessage: (supabase: SupabaseClient<SupaDatabase>, conversationId: string, updatedMessage: Message) => Promise<boolean>;
export declare const supaDeleteMessage: (supabase: SupabaseClient<SupaDatabase>, conversationId: string, messageId: string) => Promise<boolean>;
