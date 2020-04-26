<template>
  <div> 
    <div class="row p-3">
      <div class="col-12 col-md-6">
        <p> Projects from my gitlab account. </p>
        <div
          v-if="loading"
        >
          Loading...
        </div>
        <div 
          v-else
          v-for="project in projects"
          :key="project.id"
          class="card bg-light mb-3" 
          style="max-width: 100%;"
        >
          <div 
            class="card-header p-2"
          > 
            <span
              @click="openRepoInNewTab(project.web_url)"
              style="color: blue; cursor: pointer;"
            >
              {{ project.name || 'N/A' }} 
            </span>
            <div
              class="text-right d-inline float-right"
            > 
              <button 
                type="button" 
                class="btn btn-info m-0 p-1"
                v-clipboard:copy="project.http_url_to_repo"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                Clone
              </button>
            </div>
          </div>
          <div class="card-body p-2">
            <p class="card-text">
              {{ project.description || 'N/A' }}
            </p>
          </div>
            <button 
              type="button" 
              class="btn btn-info m-1 p-1"
              @click="fetchCommits(project.id), commitsLoading = true"
            >
              View Commits
            </button>
        </div>
      </div>
      <div
        class="col-12 col-md-6"
      >
        <div
          v-if="commitsLoading"
        > 
          Loading commits...
        </div>
        <div
          v-if="showCommits && commits"
          class="list-group"
        >
          <div
            v-for="commit in commits"
            :key="commit.id" 
            class="list-group-item list-group-item-action"
          >
            <div class="d-flex w-100 justify-content-between">
              <small class="text-muted">
                Committed on:
                {{ commit.committed_date }}
              </small>
            </div>
            <p class="mb-1">
              {{ commit.message }}
            </p>
            <small class="text-muted">
              {{ commit.author_name }} - {{ commit.committer_email }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script> 
export default {
  data () {
    return {
      projects: [],
      loading: true,
      commitsLoading: false,
      commits: [],
      showCommits: false
    }
  },
  mounted () {
    this.fetchProjects()
  },
  methods: {
    fetchProjects () {
      const baseUrl = 'https://gitlab.com/api/v4/users/2229730/projects'
      this.$http.get(baseUrl)
        .then((result) => {
          this.projects = result.data
          this.loading = false
        })
    },
    fetchCommits (projectId) {
      const baseUrl = `https://gitlab.com/api/v4/projects/${projectId}/repository/commits`
      this.$http.get(baseUrl)
        .then((result) => {
          this.commits = result.data
          this.showCommits = true
          this.commitsLoading = false
        })
    },
    openRepoInNewTab (url) {
      window.open(url, "_blank")
    },
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function () {
      alert('Failed to copy texts')
    }

  }
}
</script>