<template>
  <div class="barrage-main">
    <section class="barrage-box"></section>
    <ul class="barrage-list" ref="barrageBox">
      <li
        class="barrage-item"
        :ref="getItem"
        v-for="(item, index) in list"
        :key="item.id"
        :style="{ 'z-index': index + 1 }"
        :data-index="index"
      >
        弹幕这鬼东西{{ item.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch, onMounted, nextTick } from 'vue';
import velocity from 'velocity-animate';
export default {
  name: 'caseBarrage',
  setup() {
    const vmData = reactive({
      domList: [],
      list: [],
      barrage: null
    });

    const barrageBox = ref();

    const addList = () => {
      const count = Math.round(Math.random() * 10)
      const ids = [];
      const list = Array.from(new Array(count).keys()).map((item) => {
        let id = (new Date()).valueOf() - Math.round(Math.random() * Math.pow(10, 11));
        while (ids.indexOf(id) > -1) {
          id = (new Date()).valueOf() - Math.round(Math.random() * Math.pow(10, 11));
          console.log(ids.length);
        }
        ids.push(id);
        return {
          isrender: false,
          id
        }
      })
      vmData.list = [...vmData.list,...list];
      console.log(vmData.list);
    }

    const getItem = (el) => {
      // vmData.domList.push(el);
      setTimeout(() => {
        if (vmData.barrage && el) {
          const index = el.getAttribute('data-index');
          if (index >= 0 && vmData.list[index] && !vmData.list[index].isRender) {
            const id = vmData.list[index].id;
            vmData.list[index].isRender = true;
            vmData.barrage.enter(el,()=> {
              const cutIndex = vmData.list.findIndex(function (value) {
                return id == value.id;
              })
              vmData.list.splice(cutIndex, 1);
            })
            
          }
        }
      })
    };



    class Barrage {
      boxEle;

      constructor(boxEle) {
        this.boxEle = boxEle;
        this.speedMax = 350;
        this.speedMin = 100;

      }

      speedRandom() {
        const speed =
          this.boxEle.offsetWidth /
          Math.floor(
            Math.random() * (this.speedMax - this.speedMin + 1) + this.speedMin
          )
        return parseInt(speed * 3000)
      }

      positionRandom(insertH) {
        const eleHeight = this.boxEle.offsetHeight
        const top = Math.floor(Math.random() * (eleHeight - insertH)) // 随机的范围是弹幕显示区的高度-当前插入的弹幕高度
        return top
      }

      enter(el, callBack) {
        const insertH = el.offsetHeight;
        const that = this;
        el.style.top = `${this.positionRandom(insertH)}px` // 这块代码本想放在beforenter函数里，但获取不到当前元素的高度。
        velocity(
          el,
          {
            translateX: `-${that.boxEle.offsetWidth + el.offsetWidth + 100}px`
          },
          {
            easing: 'swing',
            duration: that.speedRandom(),
            complete: () => {
              callBack && callBack()
              // el.parentNode.removeChild(el)
            }
          }
        )
      }
    }



    onMounted(() => {
      addList();
      setInterval(()=>{
        addList();
      },5000)
      vmData.barrage = new Barrage(barrageBox.value);
    })

    return {
      getItem,
      barrageBox,
      ...toRefs(vmData)
    }
  }
}
</script>

<style lang="scss" scoped>
.barrage-main {
  border-color: antiquewhite;
  width: 100%;
  height: 400px;
  position: relative;
}
.barrage-box {
  background: rgba($color: #000000, $alpha: 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(1px);
}
.barrage-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.barrage-item {
  padding: 5px 15px;
  height: 20px;
  background: brown;
  color: #fff;
  border-radius: 15px;
  position: absolute;
  left: calc(100% + 100px);
  flex-shrink: 0;
  white-space: nowrap;
  opacity: 0.8;
}
</style>