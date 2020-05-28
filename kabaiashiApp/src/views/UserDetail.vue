<template>
  <div class="user-detail">
    <div class="loading" v-if="loading">
      <span>Please wait...</span>
    </div>
    <el-card class="box-card" v-else>
      <div slot="header" class="clearfix">
        <span class="card-title">@{{ user.login }}</span>
      </div>
      <div class="details">
        <div class="image detail-child">
          <img :src="user.avatar_url" :alt="user.name" />
        </div>
        <div class="basic-details detail-child">
          <div v-if="user.name" class="name bold">{{ user.name }}</div>
          <div v-if="user.company" class="name bold">{{ user.company }}</div>
          <div v-if="user.email" class="name bold">{{ user.email }}</div>
          <div v-if="user.location" class="location">{{ user.location}}</div>
          <div>
            <div class="followers">
              <div>
                <span class="bold">{{ user.followers }}</span> Followers
              </div>
              <div>
                <span class="bold">{{ user.following }}</span> Following
              </div>
            </div>
            <div class="repos">
              <div>
                <span class="bold">{{ user.public_repos }}</span> Repos
              </div>
              <div>
                <span class="bold">{{ user.public_gists }}</span> Gists
              </div>
            </div>
          </div>
          <div class="github-link">
            <a target="_blank" v-if="user.html_url" :href="user.html_url">
              <i class="fab fa-2x fa-github-square"></i>
            </a>
            <a
              target="_blank"
              v-if="user.twitter_username"
              :href="'https://twitter.com/' + user.html_url"
            >
              <i class="fab fa-2x fa-twitter-square"></i>
            </a>
            <a target="_blank" v-if="user.blog" :href="user.blog">
              <i class="fa fa-2x fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
      <div v-if="user.bio" class="bio">{{ user.bio }}</div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserDetail",
  data: () => ({
    user: {},
    loading: true
  }),
  created() {
    this.fetchUser(this.$route.params.username);
  },
  methods: {
    fetchUser(username) {
      axios
        .get(`${process.env.VUE_APP_GITHUB_API}/users/${username}`)
        .then(response => {
          this.user = response.data;
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss">
.user-detail {
  width: 40%;
  margin-top: 2rem;
}
#app {
  align-items: flex-start !important;
}
.details {
  display: flex;
  align-items: flex-start;
  .detail-child {
    margin: 0 1rem;
  }
  .image img {
    width: 130px;
    border-radius: 6px;
  }
  .basic-details {
    div {
      margin-bottom: 0.3rem;
    }
    .followers,
    .repos {
      margin: 0;
      display: flex;
      div {
        margin-right: 0.5rem;
      }
    }
    .github-link {
      a {
        margin-right: 0.5rem;
      }
    }
  }
}
.card-title {
  font-size: 1.5rem;
  font-weight: bolder;
}
.bold {
  font-weight: bold;
}
.loading {
  min-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>