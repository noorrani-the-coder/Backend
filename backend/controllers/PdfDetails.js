import mongoose from "mongoose";

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails" }
);

mongoose.model("PdfDetails", PdfDetailsSchema);

// Define the schema for PdfDetails1
const PdfDetailsSchema1 = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails1" }
);

mongoose.model("PdfDetails1", PdfDetailsSchema1);

// Define the schema for PdfDetails2
const PdfDetailsSchema2 = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails2" }
);

mongoose.model("PdfDetails2", PdfDetailsSchema2);

// Define the schema for PdfDetails3
const PdfDetailsSchema3 = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails3" }
);

mongoose.model("PdfDetails3", PdfDetailsSchema3);

// Define the schema for PdfDetails4
const PdfDetailsSchema4 = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails4" }
);

mongoose.model("PdfDetails4", PdfDetailsSchema4);



//reference books
const PdfDetailsSchema5 = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails5" }
);

mongoose.model("PdfDetails5", PdfDetailsSchema5);

const PdfDetailsSchema6 = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails6" }
);

mongoose.model("PdfDetails6", PdfDetailsSchema6);

const PdfDetailsSchema7 = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails7" }
);

mongoose.model("PdfDetails7", PdfDetailsSchema7);

const PdfDetailsSchema8 = new mongoose.Schema(
  {
    pdf: String,
    title: String,
  },
  { collection: "PdfDetails8" }
);

mongoose.model("PdfDetails8", PdfDetailsSchema8);


// Define the schema for ImageDetails
const ImageDetailsSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
  },
  { collection: "ImageDetails" }
);

mongoose.model("ImageDetails", ImageDetailsSchema);

const messageSchema = new mongoose.Schema({
  message: {
      type: String,
      required: true
  },
  user: {
      type: String,
      required: true
  },
  time: {
      type: String,
      required: true
  }
});

 mongoose.model('Message', messageSchema);



