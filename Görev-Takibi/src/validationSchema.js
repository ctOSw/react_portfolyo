// validationSchema.js
import * as Yup from "yup";

export const taskValidationSchema = Yup.object().shape({
  taskName: Yup.string()
    .required("Görev adı boş olamaz")
    .min(3, "Görev adı en az 3 karakter olmalı"),

  taskPriority: Yup.string().required("Öncelik seçmek zorunlu"),

  taskCategory: Yup.string().required("Kategori seçmek zorunlu"),

  taskDeadline: Yup.date()
    .required("Teslim tarihi zorunlu")
    .min(new Date(), "Geçmiş tarih seçilemez"),
});
