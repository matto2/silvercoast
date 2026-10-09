// Testimonials shown on the home page. The section stays hidden until this
// list has at least one entry. Only add quotes you have permission to use.
export type Testimonial = {
  quote: string;
  name: string; // full name or initials, e.g. "Linda M."
  descriptor?: string; // optional, e.g. "participant" or "daughter of a participant"
};

export const testimonials: Testimonial[] = [
  // {
  //   quote: "I look forward to class every week.",
  //   name: "Linda M.",
  //   descriptor: "participant",
  // },
];
