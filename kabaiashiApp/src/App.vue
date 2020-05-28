<template>
  <div id="app-">
    <el-menu
      default-active="2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link :to="{name: 'Home'}">
          <img src="./assets/logo.svg" alt="Brand Logo" />
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{name: 'Home'}">Home</router-link>
      </el-menu-item>
    </el-menu>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: flex;
  justify-content: center;
}

body {
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bread-crumb-container {
  display: flex;
  color: #fff;
}
</style>
