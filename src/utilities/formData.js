const formData = [
  {
    type: "text",
    label: "Your full name",
    name: "name",
    minlength: "2",
    required: true,
  },
  {
    type: "email",
    label: "Your Email",
    name: "email",
    minlength: "3",
    required: true,
  },
  {
    type: "text",
    label: "Subject",
    name: "subject",
  },
  {
    type: "longtext",
    label: "Your comment",
    name: "comment",
    required: true,
  },
];

export default formData;
