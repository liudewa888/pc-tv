<template>
  <el-backtop :right="40" :bottom="40" />
  <div class="w-full sm:w-[640px]">
    <el-tabs tab-position="left" type="card">
      <el-tab-pane :label="item.name" v-for="item in channelData">
        <el-table :data="item.data" style="width: 100%" border>
          <el-table-column prop="name" label="频道" width="160" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button type="primary" size="small" @click="play(row)">
                播放
              </el-button>
              <el-button type="primary" size="small" @click="copy(row)">
                复制
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElBacktop,
  ElMessage,
  ElTabs,
  ElTabPane,
} from "element-plus";
import { isMobileBrowser } from "../utils/utils";
const channelData = reactive([
  {
    name: "央视",
    data: window.__sourceData1,
  },
  {
    name: "卫视",
    data: window.__sourceData2,
  },
]);
const sourceData = ref(window.__sourceData);
const play = (row) => {
  if (isMobileBrowser()) {
    window.open(row.link, "__blank");
  } else {
    const url = `extension://hcbioakaecmlmkjmaddfjdcckphfiodb/player.html#video_url=${row.link}`;
    window.open(url, "__blank");
  }
};

const copy = (row) => {
  let url = null;
  if (!navigator.clipboard) {
    // 浏览器不支持 clipboard API
    ElMessage.error("暂不支持复制");
    return;
  }
  if (isMobileBrowser()) {
    url = row.link;
  } else {
    // url = `extension://hcbioakaecmlmkjmaddfjdcckphfiodb/player.html#video_url=${row.link}`;
    url = row.link;
  }
  navigator.clipboard.writeText(url).then(function () {
    ElMessage.success("复制成功");
  });
};
const play_m3u8 = (link) => {
  var player = TCPlayer("player-container-id", {
    sources: [
      {
        src: link, // 播放地址
      },
    ],
  });
};
</script>

<style scoped></style>
