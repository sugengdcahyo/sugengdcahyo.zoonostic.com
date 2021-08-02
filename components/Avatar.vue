<template>
  <div v-if="$themeConfig.authors">
    <span v-for="author in $themeConfig.authors" :key="author.name">
      <div class="d-flex post-top-meta">
        <div class="profile-avatar">
          <img
            v-if="author.name === $frontmatter.author"
            :src="$withBase(author.avatar)"
            class="avatar-image-detail"
            :alt="author.name"
          />
        </div>

        <div class="col-xs-12 col-md-9 col-lg-10 text-center text-md-left">
          <div v-if="author.name === $frontmatter.author">
            <span>{{ author.name }}</span> &nbsp;
            <NavLink
              v-if="author.name === $frontmatter.author"
              :link="author.link"
              class="btn btn-sm btn-outline-dark"
              >{{ author.linktext }}</NavLink
            >
            <div class="author-description">
              <div v-if="author.summary == null">---</div>
              {{ author.summary }}
            </div>
          </div>
        </div>
      </div>
    </span>
  </div>
  <!-- <div v-if="$themeConfig.authors">
    <span v-for="author in $themeConfig.authors" :key="author.name">
      <div class="d-flex align-items-center">
        <a class="profile-avatar">
          <img
            v-if="author.name === $frontmatter.author"
            :src="$withBase(author.avatar)"
            class="avatar-image"
            :alt="author.name"
          />
        </a>
        <div v-if="author.name === $frontmatter.author">
          <span>{{ author.name }}</span> &nbsp;
          <NavLink
            v-if="author.name === $frontmatter.author"
            :link="author.link"
            class="btn btn-sm btn-outline-dark"
            >{{ author.linktext }}</NavLink
          >
        </div>
      </div>
    </span>
  </div> -->
</template>
