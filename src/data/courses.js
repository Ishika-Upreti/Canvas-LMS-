// src/data/courses.js
const courses = [
  {
    id: 1,
    title: "Web Development",
    instructor: "John Doe",
    progress: 80,
    overview:
      "Learn HTML, CSS, and modern JavaScript. Build responsive UIs and deploy simple projects.",
    assignments: [
      { id: 1, title: "Build a responsive navbar", due: "2025-08-02", status: "Pending" },
      { id: 2, title: "Flexbox & Grid layout page", due: "2025-08-05", status: "In Progress" },
      { id: 3, title: "Simple React component", due: "2025-08-08", status: "Not Started" },
    ],
    grades: [
      { item: "Quiz 1: HTML Basics", score: 18, max: 20 },
      { item: "Assignment: CSS Card", score: 45, max: 50 },
      { item: "Quiz 2: JS Intro", score: 16, max: 20 },
    ],
  },
  {
    id: 2,
    title: "Cloud Computing",
    instructor: "Jane Smith",
    progress: 65,
    overview:
      "Understand cloud models, compute, storage, and networking. Intro to AWS services.",
    assignments: [
      { id: 1, title: "IAM & S3 hands-on", due: "2025-08-03", status: "Pending" },
      { id: 2, title: "EC2 launch & SSH", due: "2025-08-06", status: "Not Started" },
    ],
    grades: [
      { item: "Quiz 1: Cloud Models", score: 14, max: 20 },
      { item: "Lab: S3 Static Site", score: 40, max: 50 },
    ],
  },
  {
    id: 3,
    title: "UI/UX Fundamentals",
    instructor: "Emily Johnson",
    progress: 50,
    overview:
      "Principles of design, typography, color theory, and rapid prototyping with Figma.",
    assignments: [
      { id: 1, title: "Low‑fidelity wireframe", due: "2025-08-01", status: "In Progress" },
      { id: 2, title: "Redesign a signup flow", due: "2025-08-07", status: "Not Started" },
    ],
    grades: [
      { item: "Critique 1", score: 18, max: 25 },
      { item: "Prototype v1", score: 35, max: 50 },
    ],
  },
  {
    id: 4,
    title: "Data Structures",
    instructor: "Michael Brown",
    progress: 90,
    overview:
      "Arrays, linked lists, stacks, queues, trees, graphs and time complexity.",
    assignments: [
      { id: 1, title: "Implement Stack & Queue", due: "2025-08-02", status: "Submitted" },
      { id: 2, title: "Binary Tree traversals", due: "2025-08-06", status: "In Progress" },
    ],
    grades: [
      { item: "Quiz: Big‑O", score: 19, max: 20 },
      { item: "PA1: Lists", score: 47, max: 50 },
    ],
  },
  {
    id: 5,
    title: "Operating Systems",
    instructor: "Sarah Lee",
    progress: 30,
    overview:
      "Processes, threads, scheduling, memory management and file systems.",
    assignments: [
      { id: 1, title: "Process scheduler sim", due: "2025-08-04", status: "Not Started" },
    ],
    grades: [
      { item: "Quiz 1", score: 12, max: 20 },
    ],
  },
  {
    id: 6,
    title: "Computer Networks",
    instructor: "David Kim",
    progress: 70,
    overview:
      "OSI/TCP‑IP layers, routing, switching, HTTP, TLS and basic troubleshooting.",
    assignments: [
      { id: 1, title: "Subnetting worksheet", due: "2025-08-03", status: "In Progress" },
      { id: 2, title: "Packet capture lab", due: "2025-08-09", status: "Not Started" },
    ],
    grades: [
      { item: "Quiz: OSI Model", score: 17, max: 20 },
      { item: "Lab: Wireshark", score: 42, max: 50 },
    ],
  },
];

export default courses;
