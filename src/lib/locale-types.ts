export type Locale = 'en' | 'zh-CN' | 'zh-HK' | 'zh-TW';

export interface LocaleCopy {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    top: string;
    introduction: string;
    members: string;
    language: string;
  };
  languageNames: Record<Locale, string>;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    title: string;
    body: string;
  };
  members: {
    title: string;
    cardLabel: string;
  };
  feedback: {
    title: string;
    description: string;
    mailtoLabel: string;
  };
  footer: {
    copyright: string;
    followUs: string;
    companyName: string;
    addressLines: string[];
    emailLabel: string;
  };
}

export interface MemberProfile {
  id: string;
  name: string;
  bilibiliUrl: string;
  image: string;
}

export interface SocialLinks {
  bilibili: {
    label: string;
    url: string;
  };
  email: {
    label: string;
    url: string;
  };
}
