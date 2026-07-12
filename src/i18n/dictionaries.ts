import type { Locale } from "./config";

export type Dictionary = {
  common: {
    openMenu: string;
    closeMenu: string;
    technicalData: string;
    language: string;
    switchLanguage: string;
  };
  quote: {
    heading: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      country: string;
      company: string;
      product: string;
      message: string;
    };
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    submitAnother: string;
    errors: {
      emailRequired: string;
      emailInvalid: string;
      emailIncomplete: string;
      messageRequired: string;
      network: string;
      generic: string;
    };
  };
  productButtons: {
    message: string;
    sendEmail: string;
    pdfDownload: string;
    whatsapp: string;
  };
};

const en: Dictionary = {
  common: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    technicalData: "Technical Data",
    language: "Language",
    switchLanguage: "Switch language",
  },
  quote: {
    heading: "Request A Quote",
    fields: {
      name: "Name",
      email: "Email (Required)",
      phone: "Phone or WhatsApp",
      country: "Country",
      company: "Company Name",
      product: "Product",
      message: "Message (Required)",
    },
    submit: "Send A Message",
    sending: "Sending...",
    successTitle: "Thank you — your message has been received.",
    successBody: "Our team will get back to you within 24 hours.",
    submitAnother: "Submit another request",
    errors: {
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email address (e.g. name@company.com).",
      emailIncomplete: "Please enter a complete email address.",
      messageRequired: "Message is required.",
      network: "Network error. Please check your connection and try again.",
      generic: "Something went wrong. Please try again later.",
    },
  },
  productButtons: {
    message: "Message",
    sendEmail: "Send Email",
    pdfDownload: "PDF Download",
    whatsapp: "WhatsApp",
  },
};

const zh: Dictionary = {
  common: {
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    technicalData: "技术参数",
    language: "语言",
    switchLanguage: "切换语言",
  },
  quote: {
    heading: "获取报价",
    fields: {
      name: "姓名",
      email: "邮箱（必填）",
      phone: "电话或 WhatsApp",
      country: "国家/地区",
      company: "公司名称",
      product: "意向产品",
      message: "留言（必填）",
    },
    submit: "发送留言",
    sending: "发送中...",
    successTitle: "感谢您的留言，我们已收到。",
    successBody: "我们的团队将在 24 小时内与您联系。",
    submitAnother: "再提交一条",
    errors: {
      emailRequired: "请填写邮箱。",
      emailInvalid: "请输入有效的邮箱地址（例如 name@company.com）。",
      emailIncomplete: "请输入完整的邮箱地址。",
      messageRequired: "请填写留言内容。",
      network: "网络错误，请检查连接后重试。",
      generic: "提交失败，请稍后重试。",
    },
  },
  productButtons: {
    message: "留言咨询",
    sendEmail: "发送邮件",
    pdfDownload: "PDF 下载",
    whatsapp: "WhatsApp",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
