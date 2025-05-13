import personalData from "@/data/personal.json"
import projectsData from "@/data/projects.json"
import experienceData from "@/data/experience.json"
import blogData from "@/data/blog.json"

export function getPersonalData() {
  return personalData
}

export function getProjects() {
  return projectsData.all
}

export function getFeaturedProjects() {
  return projectsData.featured
}

export function getProjectById(id: string) {
  return projectsData.all.find((project) => project.id === id)
}

export function getWorkExperience() {
  return experienceData.work
}

export function getEducation() {
  return experienceData.education
}

export function getPublications() {
  return experienceData.publications
}

export function getAchievements(){
  return experienceData.achievements
}
export function getBlogPosts() {
  return blogData.posts
}

export function getBlogPostById(id: string) {
  return blogData.posts.find((post) => post.id === id)
}
