export interface NavItem {
   label: string;
   icon?: string;
   route?: string;
   permission?: string;
   roles?: string[];
   children?: NavItem[];
   exact?: boolean;
   order?: number;
   hidden?: boolean;
   featureFlag?: string;
}