export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          email: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          category_id: string | null
          content_ar: string
          content_en: string
          created_at: string
          excerpt_ar: string | null
          excerpt_en: string | null
          featured_image: string | null
          id: string
          is_featured: boolean | null
          is_published: boolean | null
          meta_description_ar: string | null
          meta_description_en: string | null
          meta_keywords_ar: string | null
          meta_keywords_en: string | null
          meta_title_ar: string | null
          meta_title_en: string | null
          published_at: string | null
          slug: string
          title_ar: string
          title_en: string
          updated_at: string
          views_count: number | null
        }
        Insert: {
          category_id?: string | null
          content_ar: string
          content_en: string
          created_at?: string
          excerpt_ar?: string | null
          excerpt_en?: string | null
          featured_image?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          meta_description_ar?: string | null
          meta_description_en?: string | null
          meta_keywords_ar?: string | null
          meta_keywords_en?: string | null
          meta_title_ar?: string | null
          meta_title_en?: string | null
          published_at?: string | null
          slug: string
          title_ar: string
          title_en: string
          updated_at?: string
          views_count?: number | null
        }
        Update: {
          category_id?: string | null
          content_ar?: string
          content_en?: string
          created_at?: string
          excerpt_ar?: string | null
          excerpt_en?: string | null
          featured_image?: string | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          meta_description_ar?: string | null
          meta_description_en?: string | null
          meta_keywords_ar?: string | null
          meta_keywords_en?: string | null
          meta_title_ar?: string | null
          meta_title_en?: string | null
          published_at?: string | null
          slug?: string
          title_ar?: string
          title_en?: string
          updated_at?: string
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description_ar: string | null
          description_en: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          meta_description_ar: string | null
          meta_description_en: string | null
          meta_title_ar: string | null
          meta_title_en: string | null
          name_ar: string
          name_en: string
          slug: string
          sort_order: number | null
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          meta_description_ar?: string | null
          meta_description_en?: string | null
          meta_title_ar?: string | null
          meta_title_en?: string | null
          name_ar: string
          name_en: string
          slug: string
          sort_order?: number | null
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          meta_description_ar?: string | null
          meta_description_en?: string | null
          meta_title_ar?: string | null
          meta_title_en?: string | null
          name_ar?: string
          name_en?: string
          slug?: string
          sort_order?: number | null
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      inquiries: {
        Row: {
          admin_notes: string | null
          created_at: string
          email: string
          id: string
          inquiry_type: string | null
          message: string
          name: string
          phone: string | null
          status: string | null
          tour_id: string | null
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          email: string
          id?: string
          inquiry_type?: string | null
          message: string
          name: string
          phone?: string | null
          status?: string | null
          tour_id?: string | null
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          email?: string
          id?: string
          inquiry_type?: string | null
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
          tour_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "inquiries_tour_id_fkey"
            columns: ["tour_id"]
            isOneToOne: false
            referencedRelation: "tours"
            referencedColumns: ["id"]
          },
        ]
      }
      site_settings: {
        Row: {
          created_at: string
          id: string
          key: string
          type: string | null
          updated_at: string
          value_ar: string | null
          value_en: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          type?: string | null
          updated_at?: string
          value_ar?: string | null
          value_en?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          type?: string | null
          updated_at?: string
          value_ar?: string | null
          value_en?: string | null
        }
        Relationships: []
      }
      tours: {
        Row: {
          category_id: string | null
          content_ar: string
          content_en: string
          created_at: string
          duration_ar: string | null
          duration_en: string | null
          excerpt_ar: string | null
          excerpt_en: string | null
          excluded_ar: string[] | null
          excluded_en: string[] | null
          featured_image: string | null
          gallery: string[] | null
          id: string
          included_ar: string[] | null
          included_en: string[] | null
          is_featured: boolean | null
          is_published: boolean | null
          itinerary_ar: Json | null
          itinerary_en: Json | null
          meeting_point_ar: string | null
          meeting_point_en: string | null
          meta_description_ar: string | null
          meta_description_en: string | null
          meta_keywords_ar: string | null
          meta_keywords_en: string | null
          meta_title_ar: string | null
          meta_title_en: string | null
          price_currency: string | null
          price_from: number | null
          published_at: string | null
          slug: string
          sort_order: number | null
          title_ar: string
          title_en: string
          updated_at: string
          views_count: number | null
        }
        Insert: {
          category_id?: string | null
          content_ar: string
          content_en: string
          created_at?: string
          duration_ar?: string | null
          duration_en?: string | null
          excerpt_ar?: string | null
          excerpt_en?: string | null
          excluded_ar?: string[] | null
          excluded_en?: string[] | null
          featured_image?: string | null
          gallery?: string[] | null
          id?: string
          included_ar?: string[] | null
          included_en?: string[] | null
          is_featured?: boolean | null
          is_published?: boolean | null
          itinerary_ar?: Json | null
          itinerary_en?: Json | null
          meeting_point_ar?: string | null
          meeting_point_en?: string | null
          meta_description_ar?: string | null
          meta_description_en?: string | null
          meta_keywords_ar?: string | null
          meta_keywords_en?: string | null
          meta_title_ar?: string | null
          meta_title_en?: string | null
          price_currency?: string | null
          price_from?: number | null
          published_at?: string | null
          slug: string
          sort_order?: number | null
          title_ar: string
          title_en: string
          updated_at?: string
          views_count?: number | null
        }
        Update: {
          category_id?: string | null
          content_ar?: string
          content_en?: string
          created_at?: string
          duration_ar?: string | null
          duration_en?: string | null
          excerpt_ar?: string | null
          excerpt_en?: string | null
          excluded_ar?: string[] | null
          excluded_en?: string[] | null
          featured_image?: string | null
          gallery?: string[] | null
          id?: string
          included_ar?: string[] | null
          included_en?: string[] | null
          is_featured?: boolean | null
          is_published?: boolean | null
          itinerary_ar?: Json | null
          itinerary_en?: Json | null
          meeting_point_ar?: string | null
          meeting_point_en?: string | null
          meta_description_ar?: string | null
          meta_description_en?: string | null
          meta_keywords_ar?: string | null
          meta_keywords_en?: string | null
          meta_title_ar?: string | null
          meta_title_en?: string | null
          price_currency?: string | null
          price_from?: number | null
          published_at?: string | null
          slug?: string
          sort_order?: number | null
          title_ar?: string
          title_en?: string
          updated_at?: string
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tours_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
