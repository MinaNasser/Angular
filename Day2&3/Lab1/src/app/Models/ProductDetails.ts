export interface ProductDetails {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;  // اسم الفئة أو الـ Category
    vendor: string;    // اسم البائع أو الـ Vendor
    imagePaths: string[]; // مصار الصور التي تم تحميلها للمنتج
    createdDate: string;  // تاريخ الإنشاء
    updatedDate: string;  // تاريخ آخر تحديث
  }
  