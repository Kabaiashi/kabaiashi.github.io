<template>
  <div class="home">
    <h3>Top 20 users list</h3>
    <el-table :data="users" stripe style="width: 100%">
      <template slot="empty">
        <span>Please wait...</span>
      </template>
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="login" label="Username" width="180"></el-table-column>
      <el-table-column prop="html_url" label="Github Link"></el-table-column>
      <el-table-column label="Operations" width="120">
        <template slot-scope="{row}">
          <el-button
            class="detail-action-link"
            @click="handleDetail(row.login)"
            type="text"
            size="small"
          >Detail</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchUsers"]),
    handleDetail(username) {
      this.$router.push({
        name: "UserDetail",
        params: {
          username
        }
      });
    }
  },
  computed: {
    ...mapGetters(["users"])
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style lang="scss">
.home {
  width: 70%;
  margin-top: 2rem;
}
#app {
  align-items: flex-start !important;
}
.detail-action-link {
  &:hover {
    text-decoration: underline;
  }
}
</style>