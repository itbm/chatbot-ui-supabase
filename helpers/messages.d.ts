import { SupaDatabase } from '../types/supabase';
import { Message } from '@chatbot-ui/core/types/chat';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaGetMessages: (supabase: SupabaseClient<SupaDatabase>, conversationId: string) => Promise<Message[]>;
export declare const supaCreateMessages: (supabase: SupabaseClient<SupaDatabase>, conversationId: string, newMessages: Message[]) => Promise<boolean>;
export declare const supaUpdateMessages: (supabase: SupabaseClient<SupaDatabase>, conversationId: string, updatedMessages: Message[]) => Promise<boolean>;
export declare const supaDeleteMessages: (supabase: SupabaseClient<SupaDatabase>, conversationId: string, messageIds: string[]) => Promise<boolean>;
