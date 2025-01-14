export type RootInterface = Record<
  string | number,
  MaterialValue | SegmentValue
>;

export interface MaterialValue {
  commerce_template_cate: string;
  commerce_template_pay_status: string;
  commerce_template_pay_type: string;
  enter_from: string;
  is_brand: number;
  is_vip: string;
  keywordSource: string;
  materialCategory: string;
  materialId: string;
  materialName: string;
  materialSubcategory: string;
  materialSubcategoryId: string;
  materialThirdcategory: string;
  materialThirdcategoryId: string;
  previewed: number;
  previewed_before_added: number;
  rank: string;
  rec_id: string;
  requestId: string;
  role: string;
  searchId: string;
  searchKeyword: string;
  team_id: string;
  template_author_id: string;
  template_drafts_price: number;
  template_duration: number;
  template_fragment_cnt: number;
  template_type: string;
  template_use_cnt: number;
  textTemplateVersion: string;
}

export interface SegmentValue {
  is_brand: number;
  is_vip: string;
  keywordSource: string;
  materialCategory: string;
  materialId: string;
  materialName: string;
  materialSubcategory: string;
  materialSubcategoryId: string;
  materialThirdcategory: string;
  materialThirdcategoryId: string;
  rank: string;
  rec_id: string;
  requestId: string;
  role: string;
  searchId: string;
  searchKeyword: string;
  segmentId: string;
  team_id: string;
  textTemplateVersion: string;
}
