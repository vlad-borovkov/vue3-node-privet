<template>
  <div class="table">
    <div class="table-head">
      <span style="color: brown; font-weight: 700">Категория</span>
      <span>👀⬆</span>
      <span>▶</span>
      <span>🔼</span>
      <span>🏷</span>
      <span>💳</span>
      <span>👀/🔼</span>
      <span>👀/💳</span>
    </div>

    <div v-for="item in store.getTableData" :key="item.id">
      <div class="table-parent-row">
        <button
          :id="item.id"
          @click="setParrentHideState(item.categoryId)"
          :class="[
            'table-button-parent',
            item.isClicked && 'table-button-parent-active',
          ]"
        ></button>
        <span style="padding-left: 30px">{{ item.title }}</span>
        <span>{{ item.countView }}</span>
        <span>{{ item.countPlay }}</span>
        <span>{{ item.countSend }}</span>
        <span>{{ item.countOrder }}</span>
        <span>{{ item.countPay }}</span>
        <span>{{ item.viewSend }}</span>
        <span>{{ item.viewPay }}</span>
      </div>

      <div v-if="item.children">
        <div
          v-for="child in item.children"
          :key="child.id"
          class="table-child-row-wrp"
        >
          <div class="table-child-row" v-show="child.isVisible">
            <button
              v-if="child.children"
              @click="setChildHideState(item.categoryId, child.categoryId)"
              class="table-button-child"
              :class="[
                'table-button-child',
                child.isClicked && 'table-button-child-active',
              ]"
            ></button>
            <span style="padding: 5px 0 5px 50px">{{ child.title }}</span>

            <span>{{ child.countView }}</span>
            <span>{{ child.countPlay }}</span>
            <span>{{ child.countSend }}</span>
            <span>{{ child.countOrder }}</span>
            <span>{{ child.countPay }}</span>
            <span>{{ child.viewSend }}</span>
            <span>{{ child.viewPay }}</span>
          </div>

          <div v-if="child.children">
            <div
              v-for="subchild in child.children"
              :key="subchild.id"
              class="table-subchild-row-wrp"
              v-show="subchild.isVisible"
            >
              <div class="table-subchild-row">
                <span style="padding: 5px 0 5px 90px">
                  {{ subchild.title }}
                </span>
                <span>{{ subchild.countView }}</span>
                <span>{{ subchild.countPlay }}</span>
                <span>{{ subchild.countSend }}</span>
                <span>{{ subchild.countOrder }}</span>
                <span>{{ subchild.countPay }}</span>
                <span>{{ subchild.viewSend }}</span>
                <span>{{ subchild.viewPay }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table-footer">
      <span style="font-weight: 700">ИТОГО</span>
      <span>{{ computedAmount.countView }}</span>
      <span>{{ computedAmount.countPlay }}</span>
      <span>{{ computedAmount.countSend }}</span>
      <span>{{ computedAmount.countOrder }}</span>
      <span>{{ computedAmount.countPay }}</span>
      <span>{{ computedAmount.viewSend.toFixed(1) + "%" }}</span>
      <span>{{
        computedAmount.viewPay === Infinity
          ? "0"
          : computedAmount.viewPay.toFixed(1) + "%"
      }}</span>
    </div>
  </div>
</template>
  
  <script>
import { computed, ref } from "vue";
import { useProductStore } from "@/store/index.ts";
export default {
  name: "TableRecurse",

  setup() {
    const store = useProductStore();

    const parentButton = ref(false);

    const setParrentHideState = (categoryId) => {
      const clickedParrent = store.tableData.items.find((item) => {
        return item.categoryId === categoryId;
      });
      // пробросить в каждый объект поле isVisible
      if (!clickedParrent) return;
      clickedParrent.isClicked = !clickedParrent.isClicked;
      clickedParrent.children.forEach((childItem) => {
        childItem.isVisible = !childItem.isVisible;

        if (!childItem.children) return;
        childItem.children.forEach((childItem) => {
          childItem.isVisible = false;
        });
      });
    };

    const setChildHideState = (categoryId, childCategory) => {
      const clickedParrent = store.tableData.items.find((item) => {
        return item.categoryId === categoryId;
      });

      if (!clickedParrent.children) return;

      const clickedChildren = clickedParrent.children.find((childItem) => {
        return childItem.categoryId === childCategory;
      });

      clickedChildren.isClicked = !clickedChildren.isClicked;
      clickedChildren.children.forEach((childItem) => {
        childItem.isVisible = !childItem.isVisible;
      });
    };

    const computedAmount = computed(() => {
      const amountValue = {
        countView: 0,
        countPlay: 0,
        countSend: 0,
        countOrder: 0,
        countPay: 0,
        viewSend: 0,
        viewPay: 0,
      };

      store.tableData.items.forEach((item) => {
        amountValue.countView += item.countView;
        amountValue.countPlay += item.countPlay;
        amountValue.countSend += item.countSend;
        amountValue.countOrder += item.countOrder;
        amountValue.countPay += item.countPay;
      });

      amountValue.viewSend =
        (amountValue.countSend / amountValue.countView) * 100;
      amountValue.viewPay =
        (amountValue.countView / amountValue.countPay) * 100;

      return amountValue;
    });

    const memoizedComputedAmount = computed(() => {
      return computedAmount.value;
    });

    return {
      store,
      computedAmount: memoizedComputedAmount,
      setParrentHideState,
      setChildHideState,
      parentButton,
    };
  },
};
</script>

<style scoped>
.table-button-parent {
  position: absolute;
  top: auto;
  left: 5px;
  background: transparent;
  width: 15px;
  height: 15px;
  background-image: url(./../../assets/angle-right.svg);
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
}

.table-button-child {
  position: absolute;
  top: auto;
  left: 20px;
  background: transparent;
  width: 15px;
  height: 15px;
  background-image: url(./../../assets/angle-right.svg);
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
}

.table-button-parent-active {
  transform: rotate(90deg);
}

.table-button-child-active {
  transform: rotate(90deg);
}
.table {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.table-head {
  display: grid;
  grid-template-columns: 30% 10% 10% 10% 10% 10% 10% 10%;
  align-items: center;
}

.table-footer {
  display: grid;
  grid-template-columns: 30% 10% 10% 10% 10% 10% 10% 10%;
  padding: 15px 0px 15px 0px;
  background-color: rgba(128, 128, 128, 0.2);
}

.table-parent-row {
  padding: 10px 10px;
  position: relative;
  border-bottom: 1px solid rgba(128, 128, 128, 0.566);
  display: grid;
  grid-template-columns: 30% 10% 10% 10% 10% 10% 10% 10%;
  align-items: center;
}

.table-child-row-wrp:last-child {
  border: none;
}

.table-child-row {
  padding: 10px 10px;
  position: relative;
  border-bottom: 1px solid rgba(128, 128, 128, 0.566);
  display: grid;
  grid-template-columns: 30% 10% 10% 10% 10% 10% 10% 10%;
  align-items: center;
}

.table-subchild-row {
  padding: 10px 10px;
  position: relative;
  display: grid;
  grid-template-columns: 30% 10% 10% 10% 10% 10% 10% 10%;
  align-items: center;
}

.table-subchild-row-wrp {
  border-bottom: 1px solid grey;
}
.table-subchild-row-wrp:last-child {
  border: none;
}
</style>
  