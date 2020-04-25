
import HomePage from './pages/Home.vue'
import BlogPage from './pages/Blog.vue'
import BlogPost from './pages/blog/blog_post.vue'
import EducationPage from './pages/Education.vue'
import ProjectPage from './pages/Project.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage },
  { path: '/blog/:title', component: BlogPost },
  { path: '/education', component: EducationPage },
  { path: '/projects', component: ProjectPage }
];

export default routes;
