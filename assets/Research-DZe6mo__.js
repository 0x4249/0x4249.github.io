import { o as uid, Q as QIcon, d as QSpinner, p as useFormProps, q as useFormInputNameAttr, e as useCheckboxProps, f as useCheckboxEmits, g as useCheckbox, r as getModifierDirections, s as shouldStart, t as clearSelection, w as getNormalizedVNodes, T as TouchPan, m as QTabs, n as QRouteTab } from "./TouchPan-D9UowS7o.js";
import { x as isRuntimeSsrPreHydration, r as ref, k as onMounted, j as watch, c as computed, V as onBeforeUpdate, g as getCurrentInstance, d as inject, W as formKey, o as onBeforeUnmount, B as debounce, X as injectProp, s as stopAndPrevent, n as nextTick, C as onDeactivated, D as onActivated, h, p as prevent, T as Transition, Y as shouldIgnoreKey, m as client, a as createComponent, b as stop, w as withDirectives, Z as vShow, $ as createDirective, v as noop, a0 as leftClick, a1 as addEvt, a2 as preventDraggable, a3 as position, a4 as cleanEvt, a5 as KeepAlive, E as defineComponent, _ as _export_sfc, G as openBlock, I as createBlock, J as withCtx, R as createBaseVNode, K as createVNode, L as createCommentVNode, S as pushScopeId, U as popScopeId, M as createTextVNode } from "./index-ByAOPkok.js";
import { c as useDark, a as hSlot, u as useDarkProps, d as hDir, h as hMergeSlot, Q as QSeparator } from "./QSeparator-BqnkYkSf.js";
import { Q as QPage, a as QCardSection, b as QCard } from "./QPage-ByIETOE1.js";
function parseValue(val) {
  return val === void 0 || val === null ? null : val;
}
function getId(val, required) {
  return val === void 0 || val === null ? required === true ? `f_${uid()}` : null : val;
}
function useId({ getValue, required = true } = {}) {
  if (isRuntimeSsrPreHydration.value === true) {
    const id = getValue !== void 0 ? ref(parseValue(getValue())) : ref(null);
    if (required === true && id.value === null) {
      onMounted(() => {
        id.value = `f_${uid()}`;
      });
    }
    if (getValue !== void 0) {
      watch(getValue, (newId) => {
        id.value = getId(newId, required);
      });
    }
    return id;
  }
  return getValue !== void 0 ? computed(() => getId(getValue(), required)) : ref(`f_${uid()}`);
}
const listenerRE = /^on[A-Z]/;
function useSplitAttrs() {
  const { attrs, vnode } = getCurrentInstance();
  const acc = {
    listeners: ref({}),
    attributes: ref({})
  };
  function update() {
    const attributes = {};
    const listeners = {};
    for (const key in attrs) {
      if (key !== "class" && key !== "style" && listenerRE.test(key) === false) {
        attributes[key] = attrs[key];
      }
    }
    for (const key in vnode.props) {
      if (listenerRE.test(key) === true) {
        listeners[key] = vnode.props[key];
      }
    }
    acc.attributes.value = attributes;
    acc.listeners.value = listeners;
  }
  onBeforeUpdate(update);
  update();
  return acc;
}
function useFormChild({ validate, resetValidation, requiresQForm }) {
  const $form = inject(formKey, false);
  if ($form !== false) {
    const { props, proxy } = getCurrentInstance();
    Object.assign(proxy, { validate, resetValidation });
    watch(() => props.disable, (val) => {
      if (val === true) {
        typeof resetValidation === "function" && resetValidation();
        $form.unbindComponent(proxy);
      } else {
        $form.bindComponent(proxy);
      }
    });
    onMounted(() => {
      props.disable !== true && $form.bindComponent(proxy);
    });
    onBeforeUnmount(() => {
      props.disable !== true && $form.unbindComponent(proxy);
    });
  } else if (requiresQForm === true) {
    console.error("Parent QForm not found on useFormChild()!");
  }
}
const hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
const testPattern = {
  date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
  time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
  fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
  timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
  hexColor: (v) => hex.test(v),
  hexaColor: (v) => hexa.test(v),
  hexOrHexaColor: (v) => hexOrHexa.test(v),
  rgbColor: (v) => rgb.test(v),
  rgbaColor: (v) => rgba.test(v),
  rgbOrRgbaColor: (v) => rgb.test(v) || rgba.test(v),
  hexOrRgbColor: (v) => hex.test(v) || rgb.test(v),
  hexaOrRgbaColor: (v) => hexa.test(v) || rgba.test(v),
  anyColor: (v) => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
};
const lazyRulesValues = [true, false, "ondemand"];
const useValidateProps = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    default: false,
    // statement unneeded but avoids future vue implementation changes
    validator: (v) => lazyRulesValues.includes(v)
  }
};
function useValidate(focused, innerLoading) {
  const { props, proxy } = getCurrentInstance();
  const innerError = ref(false);
  const innerErrorMessage = ref(null);
  const isDirtyModel = ref(false);
  useFormChild({ validate, resetValidation });
  let validateIndex = 0, unwatchRules;
  const hasRules = computed(
    () => props.rules !== void 0 && props.rules !== null && props.rules.length !== 0
  );
  const canDebounceValidate = computed(() => props.disable !== true && hasRules.value === true && innerLoading.value === false);
  const hasError = computed(
    () => props.error === true || innerError.value === true
  );
  const errorMessage = computed(() => typeof props.errorMessage === "string" && props.errorMessage.length !== 0 ? props.errorMessage : innerErrorMessage.value);
  watch(() => props.modelValue, () => {
    isDirtyModel.value = true;
    if (canDebounceValidate.value === true && props.lazyRules === false) {
      debouncedValidate();
    }
  });
  function onRulesChange() {
    if (props.lazyRules !== "ondemand" && canDebounceValidate.value === true && isDirtyModel.value === true) {
      debouncedValidate();
    }
  }
  watch(() => props.reactiveRules, (val) => {
    if (val === true) {
      if (unwatchRules === void 0) {
        unwatchRules = watch(() => props.rules, onRulesChange, { immediate: true, deep: true });
      }
    } else if (unwatchRules !== void 0) {
      unwatchRules();
      unwatchRules = void 0;
    }
  }, { immediate: true });
  watch(() => props.lazyRules, onRulesChange);
  watch(focused, (val) => {
    if (val === true) {
      isDirtyModel.value = true;
    } else if (canDebounceValidate.value === true && props.lazyRules !== "ondemand") {
      debouncedValidate();
    }
  });
  function resetValidation() {
    validateIndex++;
    innerLoading.value = false;
    isDirtyModel.value = false;
    innerError.value = false;
    innerErrorMessage.value = null;
    debouncedValidate.cancel();
  }
  function validate(val = props.modelValue) {
    if (props.disable === true || hasRules.value === false) {
      return true;
    }
    const index = ++validateIndex;
    const setDirty = innerLoading.value !== true ? () => {
      isDirtyModel.value = true;
    } : () => {
    };
    const update = (err, msg) => {
      err === true && setDirty();
      innerError.value = err;
      innerErrorMessage.value = msg || null;
      innerLoading.value = false;
    };
    const promises = [];
    for (let i = 0; i < props.rules.length; i++) {
      const rule = props.rules[i];
      let res;
      if (typeof rule === "function") {
        res = rule(val, testPattern);
      } else if (typeof rule === "string" && testPattern[rule] !== void 0) {
        res = testPattern[rule](val);
      }
      if (res === false || typeof res === "string") {
        update(true, res);
        return false;
      } else if (res !== true && res !== void 0) {
        promises.push(res);
      }
    }
    if (promises.length === 0) {
      update(false);
      return true;
    }
    innerLoading.value = true;
    return Promise.all(promises).then(
      (res) => {
        if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
          index === validateIndex && update(false);
          return true;
        }
        const msg = res.find((r) => r === false || typeof r === "string");
        index === validateIndex && update(msg !== void 0, msg);
        return msg === void 0;
      },
      (e) => {
        if (index === validateIndex) {
          console.error(e);
          update(true);
        }
        return false;
      }
    );
  }
  const debouncedValidate = debounce(validate, 0);
  onBeforeUnmount(() => {
    unwatchRules !== void 0 && unwatchRules();
    debouncedValidate.cancel();
  });
  Object.assign(proxy, { resetValidation, validate });
  injectProp(proxy, "hasError", () => hasError.value);
  return {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    validate,
    resetValidation
  };
}
let queue = [];
let waitFlags = [];
function addFocusFn(fn) {
  if (waitFlags.length === 0) {
    fn();
  } else {
    queue.push(fn);
  }
}
function removeFocusFn(fn) {
  queue = queue.filter((entry) => entry !== fn);
}
function fieldValueIsFilled(val) {
  return val !== void 0 && val !== null && ("" + val).length !== 0;
}
const useNonInputFieldProps = {
  ...useDarkProps,
  ...useValidateProps,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String
};
const useFieldProps = {
  ...useNonInputFieldProps,
  maxlength: [Number, String]
};
const useFieldEmits = ["update:modelValue", "clear", "focus", "blur"];
function useFieldState({ requiredForAttr = true, tagProp, changeEvent = false } = {}) {
  const { props, proxy } = getCurrentInstance();
  const isDark = useDark(props, proxy.$q);
  const targetUid = useId({
    required: requiredForAttr,
    getValue: () => props.for
  });
  return {
    requiredForAttr,
    changeEvent,
    tag: tagProp === true ? computed(() => props.tag) : { value: "label" },
    isDark,
    editable: computed(
      () => props.disable !== true && props.readonly !== true
    ),
    innerLoading: ref(false),
    focused: ref(false),
    hasPopupOpen: false,
    splitAttrs: useSplitAttrs(),
    targetUid,
    rootRef: ref(null),
    targetRef: ref(null),
    controlRef: ref(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function useField(state) {
  const { props, emit, slots, attrs, proxy } = getCurrentInstance();
  const { $q } = proxy;
  let focusoutTimer = null;
  if (state.hasValue === void 0) {
    state.hasValue = computed(() => fieldValueIsFilled(props.modelValue));
  }
  if (state.emitValue === void 0) {
    state.emitValue = (value) => {
      emit("update:modelValue", value);
    };
  }
  if (state.controlEvents === void 0) {
    state.controlEvents = {
      onFocusin: onControlFocusin,
      onFocusout: onControlFocusout
    };
  }
  Object.assign(state, {
    clearValue,
    onControlFocusin,
    onControlFocusout,
    focus
  });
  if (state.computedCounter === void 0) {
    state.computedCounter = computed(() => {
      if (props.counter !== false) {
        const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? ("" + props.modelValue).length : Array.isArray(props.modelValue) === true ? props.modelValue.length : 0;
        const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
        return len + (max !== void 0 ? " / " + max : "");
      }
    });
  }
  const {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    resetValidation
  } = useValidate(state.focused, state.innerLoading);
  const floatingLabel = state.floatingLabel !== void 0 ? computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
  const shouldRenderBottom = computed(
    () => props.bottomSlots === true || props.hint !== void 0 || hasRules.value === true || props.counter === true || props.error !== null
  );
  const styleType = computed(() => {
    if (props.filled === true) {
      return "filled";
    }
    if (props.outlined === true) {
      return "outlined";
    }
    if (props.borderless === true) {
      return "borderless";
    }
    if (props.standout) {
      return "standout";
    }
    return "standard";
  });
  const classes = computed(
    () => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded === true ? " q-field--rounded" : "") + (props.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props.dense === true ? " q-field--dense" : "") + (props.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props.disable === true ? " q-field--disabled" : props.readonly === true ? " q-field--readonly" : "")
  );
  const contentClass = computed(
    () => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props.standout === "string" && props.standout.length !== 0 && state.focused.value === true ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : "")
  );
  const hasLabel = computed(
    () => props.labelSlot === true || props.label !== void 0
  );
  const labelClass = computed(
    () => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${props.labelColor}` : "")
  );
  const controlSlotScope = computed(() => ({
    id: state.targetUid.value,
    editable: state.editable.value,
    focused: state.focused.value,
    floatingLabel: floatingLabel.value,
    modelValue: props.modelValue,
    emitValue: state.emitValue
  }));
  const attributes = computed(() => {
    const acc = {};
    if (state.targetUid.value) {
      acc.for = state.targetUid.value;
    }
    if (props.disable === true) {
      acc["aria-disabled"] = "true";
    }
    return acc;
  });
  function focusHandler() {
    const el = document.activeElement;
    let target = state.targetRef !== void 0 && state.targetRef.value;
    if (target && (el === null || el.id !== state.targetUid.value)) {
      target.hasAttribute("tabindex") === true || (target = target.querySelector("[tabindex]"));
      if (target && target !== el) {
        target.focus({ preventScroll: true });
      }
    }
  }
  function focus() {
    addFocusFn(focusHandler);
  }
  function blur() {
    removeFocusFn(focusHandler);
    const el = document.activeElement;
    if (el !== null && state.rootRef.value.contains(el)) {
      el.blur();
    }
  }
  function onControlFocusin(e) {
    if (focusoutTimer !== null) {
      clearTimeout(focusoutTimer);
      focusoutTimer = null;
    }
    if (state.editable.value === true && state.focused.value === false) {
      state.focused.value = true;
      emit("focus", e);
    }
  }
  function onControlFocusout(e, then) {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
    focusoutTimer = setTimeout(() => {
      focusoutTimer = null;
      if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) {
        return;
      }
      if (state.focused.value === true) {
        state.focused.value = false;
        emit("blur", e);
      }
      then !== void 0 && then();
    });
  }
  function clearValue(e) {
    stopAndPrevent(e);
    if ($q.platform.is.mobile !== true) {
      const el = state.targetRef !== void 0 && state.targetRef.value || state.rootRef.value;
      el.focus();
    } else if (state.rootRef.value.contains(document.activeElement) === true) {
      document.activeElement.blur();
    }
    if (props.type === "file") {
      state.inputRef.value.value = null;
    }
    emit("update:modelValue", null);
    state.changeEvent === true && emit("change", null);
    emit("clear", props.modelValue);
    nextTick(() => {
      const isDirty = isDirtyModel.value;
      resetValidation();
      isDirtyModel.value = isDirty;
    });
  }
  function onClearableKeyup(evt) {
    [13, 32].includes(evt.keyCode) && clearValue(evt);
  }
  function getContent() {
    const node = [];
    slots.prepend !== void 0 && node.push(
      h("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: prevent
      }, slots.prepend())
    );
    node.push(
      h("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, getControlContainer())
    );
    hasError.value === true && props.noErrorIcon === false && node.push(
      getInnerAppendNode("error", [
        h(QIcon, { name: $q.iconSet.field.error, color: "negative" })
      ])
    );
    if (props.loading === true || state.innerLoading.value === true) {
      node.push(
        getInnerAppendNode(
          "inner-loading-append",
          slots.loading !== void 0 ? slots.loading() : [h(QSpinner, { color: props.color })]
        )
      );
    } else if (props.clearable === true && state.hasValue.value === true && state.editable.value === true) {
      node.push(
        getInnerAppendNode("inner-clearable-append", [
          h(QIcon, {
            class: "q-field__focusable-action",
            name: props.clearIcon || $q.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-label": $q.lang.label.clear,
            onKeyup: onClearableKeyup,
            onClick: clearValue
          })
        ])
      );
    }
    slots.append !== void 0 && node.push(
      h("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: prevent
      }, slots.append())
    );
    state.getInnerAppend !== void 0 && node.push(
      getInnerAppendNode("inner-append", state.getInnerAppend())
    );
    state.getControlChild !== void 0 && node.push(
      state.getControlChild()
    );
    return node;
  }
  function getControlContainer() {
    const node = [];
    props.prefix !== void 0 && props.prefix !== null && node.push(
      h("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, props.prefix)
    );
    if (state.getShadowControl !== void 0 && state.hasShadow.value === true) {
      node.push(
        state.getShadowControl()
      );
    }
    if (state.getControl !== void 0) {
      node.push(state.getControl());
    } else if (slots.rawControl !== void 0) {
      node.push(slots.rawControl());
    } else if (slots.control !== void 0) {
      node.push(
        h("div", {
          ref: state.targetRef,
          class: "q-field__native row",
          tabindex: -1,
          ...state.splitAttrs.attributes.value,
          "data-autofocus": props.autofocus === true || void 0
        }, slots.control(controlSlotScope.value))
      );
    }
    hasLabel.value === true && node.push(
      h("div", {
        class: labelClass.value
      }, hSlot(slots.label, props.label))
    );
    props.suffix !== void 0 && props.suffix !== null && node.push(
      h("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, props.suffix)
    );
    return node.concat(hSlot(slots.default));
  }
  function getBottom() {
    let msg, key;
    if (hasError.value === true) {
      if (errorMessage.value !== null) {
        msg = [h("div", { role: "alert" }, errorMessage.value)];
        key = `q--slot-error-${errorMessage.value}`;
      } else {
        msg = hSlot(slots.error);
        key = "q--slot-error";
      }
    } else if (props.hideHint !== true || state.focused.value === true) {
      if (props.hint !== void 0) {
        msg = [h("div", props.hint)];
        key = `q--slot-hint-${props.hint}`;
      } else {
        msg = hSlot(slots.hint);
        key = "q--slot-hint";
      }
    }
    const hasCounter = props.counter === true || slots.counter !== void 0;
    if (props.hideBottomSpace === true && hasCounter === false && msg === void 0) {
      return;
    }
    const main = h("div", {
      key,
      class: "q-field__messages col"
    }, msg);
    return h("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (props.hideBottomSpace !== true ? "animated" : "stale"),
      onClick: prevent
    }, [
      props.hideBottomSpace === true ? main : h(Transition, { name: "q-transition--field-message" }, () => main),
      hasCounter === true ? h("div", {
        class: "q-field__counter"
      }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null
    ]);
  }
  function getInnerAppendNode(key, content) {
    return content === null ? null : h("div", {
      key,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, content);
  }
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    shouldActivate === true && props.autofocus === true && proxy.focus();
  });
  props.autofocus === true && onMounted(() => {
    proxy.focus();
  });
  onBeforeUnmount(() => {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
  });
  Object.assign(proxy, { focus, blur });
  return function renderField() {
    const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
      ...state.splitAttrs.attributes.value,
      "data-autofocus": props.autofocus === true || void 0,
      ...attributes.value
    } : attributes.value;
    return h(state.tag.value, {
      ref: state.rootRef,
      class: [
        classes.value,
        attrs.class
      ],
      style: attrs.style,
      ...labelAttrs
    }, [
      slots.before !== void 0 ? h("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.before()) : null,
      h("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        h("div", {
          ref: state.controlRef,
          class: contentClass.value,
          tabindex: -1,
          ...state.controlEvents
        }, getContent()),
        shouldRenderBottom.value === true ? getBottom() : null
      ]),
      slots.after !== void 0 ? h("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: prevent
      }, slots.after()) : null
    ]);
  };
}
const NAMED_MASKS = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
};
const TOKENS = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleLowerCase() }
};
const KEYS = Object.keys(TOKENS);
KEYS.forEach((key) => {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
const tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g"), escRegex = /[.*+?^${}()|[\]\\]/g;
const MARKER = String.fromCharCode(1);
const useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function useMask(props, emit, emitValue, inputRef) {
  let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor;
  const hasMask = ref(null);
  const innerValue = ref(getInitialMaskedValue());
  function getIsTypeText() {
    return props.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(props.type);
  }
  watch(() => props.type + props.autogrow, updateMaskInternals);
  watch(() => props.mask, (v) => {
    if (v !== void 0) {
      updateMaskValue(innerValue.value, true);
    } else {
      const val = unmaskValue(innerValue.value);
      updateMaskInternals();
      props.modelValue !== val && emit("update:modelValue", val);
    }
  });
  watch(() => props.fillMask + props.reverseFillMask, () => {
    hasMask.value === true && updateMaskValue(innerValue.value, true);
  });
  watch(() => props.unmaskedValue, () => {
    hasMask.value === true && updateMaskValue(innerValue.value);
  });
  function getInitialMaskedValue() {
    updateMaskInternals();
    if (hasMask.value === true) {
      const masked = maskValue(unmaskValue(props.modelValue));
      return props.fillMask !== false ? fillWithMask(masked) : masked;
    }
    return props.modelValue;
  }
  function getPaddedMaskMarked(size) {
    if (size < maskMarked.length) {
      return maskMarked.slice(-size);
    }
    let pad = "", localMaskMarked = maskMarked;
    const padPos = localMaskMarked.indexOf(MARKER);
    if (padPos !== -1) {
      for (let i = size - localMaskMarked.length; i > 0; i--) {
        pad += MARKER;
      }
      localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
    }
    return localMaskMarked;
  }
  function updateMaskInternals() {
    hasMask.value = props.mask !== void 0 && props.mask.length !== 0 && getIsTypeText();
    if (hasMask.value === false) {
      computedUnmask = void 0;
      maskMarked = "";
      maskReplaced = "";
      return;
    }
    const localComputedMask = NAMED_MASKS[props.mask] === void 0 ? props.mask : NAMED_MASKS[props.mask], fillChar = typeof props.fillMask === "string" && props.fillMask.length !== 0 ? props.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
    let firstMatch = props.reverseFillMask === true, unmaskChar = "", negateChar = "";
    localComputedMask.replace(tokenRegexMask, (_, char1, esc, token, char2) => {
      if (token !== void 0) {
        const c = TOKENS[token];
        mask.push(c);
        negateChar = c.negate;
        if (firstMatch === true) {
          extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
          firstMatch = false;
        }
        extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
      } else if (esc !== void 0) {
        unmaskChar = "\\" + (esc === "\\" ? "" : esc);
        mask.push(esc);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      } else {
        const c = char1 !== void 0 ? char1 : char2;
        unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
        mask.push(c);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      }
    });
    const unmaskMatcher = new RegExp(
      "^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"
    ), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
      if (index === 0 && props.reverseFillMask === true) {
        return new RegExp("^" + fillCharEscaped + "*" + re);
      } else if (index === extractLast) {
        return new RegExp(
          "^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props.reverseFillMask === true ? "$" : fillCharEscaped + "*")
        );
      }
      return new RegExp("^" + re);
    });
    computedMask = mask;
    computedUnmask = (val) => {
      const unmaskMatch = unmaskMatcher.exec(props.reverseFillMask === true ? val : val.slice(0, mask.length + 1));
      if (unmaskMatch !== null) {
        val = unmaskMatch.slice(1).join("");
      }
      const extractMatch = [], extractMatcherLength = extractMatcher.length;
      for (let i = 0, str = val; i < extractMatcherLength; i++) {
        const m = extractMatcher[i].exec(str);
        if (m === null) {
          break;
        }
        str = str.slice(m.shift().length);
        extractMatch.push(...m);
      }
      if (extractMatch.length !== 0) {
        return extractMatch.join("");
      }
      return val;
    };
    maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
    maskReplaced = maskMarked.split(MARKER).join(fillChar);
  }
  function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
    const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
    updateMaskInternalsFlag === true && updateMaskInternals();
    const preMasked = maskValue(unmasked), masked = props.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed = innerValue.value !== masked;
    inp.value !== masked && (inp.value = masked);
    changed === true && (innerValue.value = masked);
    document.activeElement === inp && nextTick(() => {
      if (masked === maskReplaced) {
        const cursor = props.reverseFillMask === true ? maskReplaced.length : 0;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (inputType === "insertFromPaste" && props.reverseFillMask !== true) {
        const maxEnd = inp.selectionEnd;
        let cursor = end - 1;
        for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) {
          if (maskMarked[i] !== MARKER) {
            cursor++;
          }
        }
        moveCursor.right(inp, cursor);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) !== -1) {
        const cursor = props.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (props.reverseFillMask === true) {
        if (changed === true) {
          const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
          if (cursor === 1 && end === 1) {
            inp.setSelectionRange(cursor, cursor, "forward");
          } else {
            moveCursor.rightReverse(inp, cursor);
          }
        } else {
          const cursor = masked.length - endReverse;
          inp.setSelectionRange(cursor, cursor, "backward");
        }
      } else {
        if (changed === true) {
          const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
          moveCursor.right(inp, cursor);
        } else {
          const cursor = end - 1;
          moveCursor.right(inp, cursor);
        }
      }
    });
    const val = props.unmaskedValue === true ? unmaskValue(masked) : masked;
    if (String(props.modelValue) !== val && (props.modelValue !== null || val !== "")) {
      emitValue(val, true);
    }
  }
  function moveCursorForPaste(inp, start, end) {
    const preMasked = maskValue(unmaskValue(inp.value));
    start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
    pastedTextStart = start;
    inp.setSelectionRange(start, end, "forward");
  }
  const moveCursor = {
    left(inp, cursor) {
      const noMarkBefore = maskMarked.slice(cursor - 1).indexOf(MARKER) === -1;
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          noMarkBefore === true && cursor++;
          break;
        }
      }
      if (i < 0 && maskMarked[cursor] !== void 0 && maskMarked[cursor] !== MARKER) {
        return moveCursor.right(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    right(inp, cursor) {
      const limit = inp.value.length;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          break;
        } else if (maskMarked[i - 1] === MARKER) {
          cursor = i;
        }
      }
      if (i > limit && maskMarked[cursor - 1] !== void 0 && maskMarked[cursor - 1] !== MARKER) {
        return moveCursor.left(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    },
    leftReverse(inp, cursor) {
      const localMaskMarked = getPaddedMaskMarked(inp.value.length);
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          break;
        } else if (localMaskMarked[i] === MARKER) {
          cursor = i;
          if (i === 0) {
            break;
          }
        }
      }
      if (i < 0 && localMaskMarked[cursor] !== void 0 && localMaskMarked[cursor] !== MARKER) {
        return moveCursor.rightReverse(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    rightReverse(inp, cursor) {
      const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, cursor + 1).indexOf(MARKER) === -1;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          cursor > 0 && noMarkBefore === true && cursor--;
          break;
        }
      }
      if (i > limit && localMaskMarked[cursor - 1] !== void 0 && localMaskMarked[cursor - 1] !== MARKER) {
        return moveCursor.leftReverse(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    }
  };
  function onMaskedClick(e) {
    emit("click", e);
    selectionAnchor = void 0;
  }
  function onMaskedKeydown(e) {
    emit("keydown", e);
    if (shouldIgnoreKey(e) === true || e.altKey === true) {
      return;
    }
    const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
    if (!e.shiftKey) {
      selectionAnchor = void 0;
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      if (e.shiftKey && selectionAnchor === void 0) {
        selectionAnchor = inp.selectionDirection === "forward" ? start : end;
      }
      const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props.reverseFillMask === true ? "Reverse" : "")];
      e.preventDefault();
      fn(inp, selectionAnchor === start ? end : start);
      if (e.shiftKey) {
        const cursor = inp.selectionStart;
        inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), "forward");
      }
    } else if (e.keyCode === 8 && props.reverseFillMask !== true && start === end) {
      moveCursor.left(inp, start);
      inp.setSelectionRange(inp.selectionStart, end, "backward");
    } else if (e.keyCode === 46 && props.reverseFillMask === true && start === end) {
      moveCursor.rightReverse(inp, end);
      inp.setSelectionRange(start, inp.selectionEnd, "forward");
    }
  }
  function maskValue(val) {
    if (val === void 0 || val === null || val === "") {
      return "";
    }
    if (props.reverseFillMask === true) {
      return maskValueReverse(val);
    }
    const mask = computedMask;
    let valIndex = 0, output = "";
    for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
      const valChar = val[valIndex], maskDef = mask[maskIndex];
      if (typeof maskDef === "string") {
        output += maskDef;
        valChar === maskDef && valIndex++;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
        valIndex++;
      } else {
        return output;
      }
    }
    return output;
  }
  function maskValueReverse(val) {
    const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
    let valIndex = val.length - 1, output = "";
    for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex !== -1; maskIndex--) {
      const maskDef = mask[maskIndex];
      let valChar = val[valIndex];
      if (typeof maskDef === "string") {
        output = maskDef + output;
        valChar === maskDef && valIndex--;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        do {
          output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
          valIndex--;
          valChar = val[valIndex];
        } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
      } else {
        return output;
      }
    }
    return output;
  }
  function unmaskValue(val) {
    return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask("" + val) : val : computedUnmask(val);
  }
  function fillWithMask(val) {
    if (maskReplaced.length - val.length <= 0) {
      return val;
    }
    return props.reverseFillMask === true && val.length !== 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
  }
  return {
    innerValue,
    hasMask,
    moveCursorForPaste,
    updateMaskValue,
    onMaskedKeydown,
    onMaskedClick
  };
}
function useFileFormDomProps(props, typeGuard) {
  function getFormDomProps() {
    const model = props.modelValue;
    try {
      const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      if (Object(model) === model) {
        ("length" in model ? Array.from(model) : [model]).forEach((file) => {
          dt.items.add(file);
        });
      }
      return {
        files: dt.files
      };
    } catch (e) {
      return {
        files: void 0
      };
    }
  }
  return computed(() => {
    if (props.type !== "file") {
      return;
    }
    return getFormDomProps();
  });
}
const isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
const isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
const isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
const isPlainText = /[a-z0-9_ -]$/i;
function useKeyComposition(onInput) {
  return function onComposition(e) {
    if (e.type === "compositionend" || e.type === "change") {
      if (e.target.qComposing !== true) return;
      e.target.qComposing = false;
      onInput(e);
    } else if (e.type === "compositionupdate" && e.target.qComposing !== true && typeof e.data === "string") {
      const isComposing = client.is.firefox === true ? isPlainText.test(e.data) === false : isJapanese.test(e.data) === true || isChinese.test(e.data) === true || isKorean.test(e.data) === true;
      if (isComposing === true) {
        e.target.qComposing = true;
      }
    }
  };
}
const QInput = createComponent({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    ...useMaskProps,
    ...useFormProps,
    // override of useFieldProps > modelValue
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(props, { emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const temp = {};
    let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer = null, emitValueFn;
    const inputRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const {
      innerValue,
      hasMask,
      moveCursorForPaste,
      updateMaskValue,
      onMaskedKeydown,
      onMaskedClick
    } = useMask(props, emit, emitValue, inputRef);
    const formDomProps = useFileFormDomProps(
      props
    );
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const onComposition = useKeyComposition(onInput);
    const state = useFieldState({ changeEvent: true });
    const isTextarea = computed(
      () => props.type === "textarea" || props.autogrow === true
    );
    const isTypeText = computed(
      () => isTextarea.value === true || ["text", "search", "url", "tel", "password"].includes(props.type)
    );
    const onEvents = computed(() => {
      const evt = {
        ...state.splitAttrs.listeners.value,
        onInput,
        onPaste,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange,
        onBlur: onFinishEditing,
        onFocus: stop
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      if (hasMask.value === true) {
        evt.onKeydown = onMaskedKeydown;
        evt.onClick = onMaskedClick;
      }
      if (props.autogrow === true) {
        evt.onAnimationend = onAnimationend;
      }
      return evt;
    });
    const inputAttrs = computed(() => {
      const attrs2 = {
        tabindex: 0,
        "data-autofocus": props.autofocus === true || void 0,
        rows: props.type === "textarea" ? 6 : void 0,
        "aria-label": props.label,
        name: nameProp.value,
        ...state.splitAttrs.attributes.value,
        id: state.targetUid.value,
        maxlength: props.maxlength,
        disabled: props.disable === true,
        readonly: props.readonly === true
      };
      if (isTextarea.value === false) {
        attrs2.type = props.type;
      }
      if (props.autogrow === true) {
        attrs2.rows = 1;
      }
      return attrs2;
    });
    watch(() => props.type, () => {
      if (inputRef.value) {
        inputRef.value.value = props.modelValue;
      }
    });
    watch(() => props.modelValue, (v) => {
      if (hasMask.value === true) {
        if (stopValueWatcher === true) {
          stopValueWatcher = false;
          if (String(v) === emitCachedValue) {
            return;
          }
        }
        updateMaskValue(v);
      } else if (innerValue.value !== v) {
        innerValue.value = v;
        if (props.type === "number" && temp.hasOwnProperty("value") === true) {
          if (typedNumber === true) {
            typedNumber = false;
          } else {
            delete temp.value;
          }
        }
      }
      props.autogrow === true && nextTick(adjustHeight);
    });
    watch(() => props.autogrow, (val) => {
      if (val === true) {
        nextTick(adjustHeight);
      } else if (inputRef.value !== null && attrs.rows > 0) {
        inputRef.value.style.height = "auto";
      }
    });
    watch(() => props.dense, () => {
      props.autogrow === true && nextTick(adjustHeight);
    });
    function focus() {
      addFocusFn(() => {
        const el = document.activeElement;
        if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) {
          inputRef.value.focus({ preventScroll: true });
        }
      });
    }
    function select() {
      inputRef.value !== null && inputRef.value.select();
    }
    function onPaste(e) {
      if (hasMask.value === true && props.reverseFillMask !== true) {
        const inp = e.target;
        moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
      }
      emit("paste", e);
    }
    function onInput(e) {
      if (!e || !e.target) {
        return;
      }
      if (props.type === "file") {
        emit("update:modelValue", e.target.files);
        return;
      }
      const val = e.target.value;
      if (e.target.qComposing === true) {
        temp.value = val;
        return;
      }
      if (hasMask.value === true) {
        updateMaskValue(val, false, e.inputType);
      } else {
        emitValue(val);
        if (isTypeText.value === true && e.target === document.activeElement) {
          const { selectionStart, selectionEnd } = e.target;
          if (selectionStart !== void 0 && selectionEnd !== void 0) {
            nextTick(() => {
              if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) {
                e.target.setSelectionRange(selectionStart, selectionEnd);
              }
            });
          }
        }
      }
      props.autogrow === true && adjustHeight();
    }
    function onAnimationend(e) {
      emit("animationend", e);
      adjustHeight();
    }
    function emitValue(val, stopWatcher) {
      emitValueFn = () => {
        emitTimer = null;
        if (props.type !== "number" && temp.hasOwnProperty("value") === true) {
          delete temp.value;
        }
        if (props.modelValue !== val && emitCachedValue !== val) {
          emitCachedValue = val;
          stopWatcher === true && (stopValueWatcher = true);
          emit("update:modelValue", val);
          nextTick(() => {
            emitCachedValue === val && (emitCachedValue = NaN);
          });
        }
        emitValueFn = void 0;
      };
      if (props.type === "number") {
        typedNumber = true;
        temp.value = val;
      }
      if (props.debounce !== void 0) {
        emitTimer !== null && clearTimeout(emitTimer);
        temp.value = val;
        emitTimer = setTimeout(emitValueFn, props.debounce);
      } else {
        emitValueFn();
      }
    }
    function adjustHeight() {
      requestAnimationFrame(() => {
        const inp = inputRef.value;
        if (inp !== null) {
          const parentStyle = inp.parentNode.style;
          const { scrollTop } = inp;
          const { overflowY, maxHeight } = $q.platform.is.firefox === true ? {} : window.getComputedStyle(inp);
          const changeOverflow = overflowY !== void 0 && overflowY !== "scroll";
          changeOverflow === true && (inp.style.overflowY = "hidden");
          parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
          inp.style.height = "1px";
          inp.style.height = inp.scrollHeight + "px";
          changeOverflow === true && (inp.style.overflowY = parseInt(maxHeight, 10) < inp.scrollHeight ? "auto" : "hidden");
          parentStyle.marginBottom = "";
          inp.scrollTop = scrollTop;
        }
      });
    }
    function onChange(e) {
      onComposition(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      emit("change", e.target.value);
    }
    function onFinishEditing(e) {
      e !== void 0 && stop(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      typedNumber = false;
      stopValueWatcher = false;
      delete temp.value;
      props.type !== "file" && setTimeout(() => {
        if (inputRef.value !== null) {
          inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
        }
      });
    }
    function getCurValue() {
      return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
    }
    onBeforeUnmount(() => {
      onFinishEditing();
    });
    onMounted(() => {
      props.autogrow === true && adjustHeight();
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")
      ),
      hasShadow: computed(
        () => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length !== 0
      ),
      inputRef,
      emitValue,
      hasValue,
      floatingLabel: computed(
        () => hasValue.value === true && (props.type !== "number" || isNaN(innerValue.value) === false) || fieldValueIsFilled(props.displayValue)
      ),
      getControl: () => {
        return h(isTextarea.value === true ? "textarea" : "input", {
          ref: inputRef,
          class: [
            "q-field__native q-placeholder",
            props.inputClass
          ],
          style: props.inputStyle,
          ...inputAttrs.value,
          ...onEvents.value,
          ...props.type !== "file" ? { value: getCurValue() } : formDomProps.value
        });
      },
      getShadowControl: () => {
        return h("div", {
          class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap")
        }, [
          h("span", { class: "invisible" }, getCurValue()),
          h("span", props.shadowText)
        ]);
      }
    });
    const renderFn = useField(state);
    Object.assign(proxy, {
      focus,
      select,
      getNativeElement: () => inputRef.value
      // deprecated
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return renderFn;
  }
});
const bgNode = h("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  h("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    h("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    h("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]);
const QCheckbox = createComponent({
  name: "QCheckbox",
  props: useCheckboxProps,
  emits: useCheckboxEmits,
  setup(props) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || null
      );
      return () => icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-checkbox__icon",
            name: icon.value
          })
        ])
      ] : [bgNode];
    }
    return useCheckbox("checkbox", getInner);
  }
});
const QSlideTransition = createComponent({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer = null, timerFallback = null, animListener, lastEvent;
    function cleanup() {
      doneFn && doneFn();
      doneFn = null;
      animating = false;
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (timerFallback !== null) {
        clearTimeout(timerFallback);
        timerFallback = null;
      }
      element !== void 0 && element.removeEventListener("transitionend", animListener);
      animListener = null;
    }
    function begin(el, height, done) {
      if (height !== void 0) {
        el.style.height = `${height}px`;
      }
      el.style.transition = `height ${props.duration}ms cubic-bezier(.25, .8, .50, 1)`;
      animating = true;
      doneFn = done;
    }
    function end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }
    function onEnter(el, done) {
      let pos = 0;
      element = el;
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      } else {
        lastEvent = "hide";
        el.style.overflowY = "hidden";
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = `${el.scrollHeight}px`;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "show");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    function onLeave(el, done) {
      let pos;
      element = el;
      if (animating === true) {
        cleanup();
      } else {
        lastEvent = "show";
        el.style.overflowY = "hidden";
        pos = el.scrollHeight;
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = 0;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "hide");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    onBeforeUnmount(() => {
      animating === true && cleanup();
    });
    return () => h(Transition, {
      css: false,
      appear: props.appear,
      onEnter,
      onLeave
    }, slots.default);
  }
});
const tickStrategyOptions = ["none", "strict", "leaf", "leaf-filtered"];
const QTree = createComponent({
  name: "QTree",
  props: {
    ...useDarkProps,
    nodes: {
      type: Array,
      required: true
    },
    nodeKey: {
      type: String,
      required: true
    },
    labelKey: {
      type: String,
      default: "label"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    dense: Boolean,
    color: String,
    controlColor: String,
    textColor: String,
    selectedColor: String,
    icon: String,
    tickStrategy: {
      type: String,
      default: "none",
      validator: (v) => tickStrategyOptions.includes(v)
    },
    ticked: Array,
    // v-model:ticked
    expanded: Array,
    // v-model:expanded
    selected: {},
    // v-model:selected
    noSelectionUnset: Boolean,
    defaultExpandAll: Boolean,
    accordion: Boolean,
    filter: String,
    filterMethod: Function,
    duration: {},
    noConnectors: Boolean,
    noTransition: Boolean,
    noNodesLabel: String,
    noResultsLabel: String
  },
  emits: [
    "update:expanded",
    "update:ticked",
    "update:selected",
    "lazyLoad",
    "afterShow",
    "afterHide"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const lazy = ref({});
    const innerTicked = ref(props.ticked || []);
    const innerExpanded = ref(props.expanded || []);
    let blurTargets = {};
    onBeforeUpdate(() => {
      blurTargets = {};
    });
    const classes = computed(
      () => `q-tree q-tree--${props.dense === true ? "dense" : "standard"}` + (props.noConnectors === true ? " q-tree--no-connectors" : "") + (isDark.value === true ? " q-tree--dark" : "") + (props.color !== void 0 ? ` text-${props.color}` : "")
    );
    const hasSelection = computed(() => props.selected !== void 0);
    const computedIcon = computed(() => props.icon || $q.iconSet.tree.icon);
    const computedControlColor = computed(() => props.controlColor || props.color);
    const textColorClass = computed(() => props.textColor !== void 0 ? ` text-${props.textColor}` : "");
    const selectedColorClass = computed(() => {
      const color = props.selectedColor || props.color;
      return color ? ` text-${color}` : "";
    });
    const computedFilterMethod = computed(() => props.filterMethod !== void 0 ? props.filterMethod : (node, filter) => {
      const filt = filter.toLowerCase();
      return node[props.labelKey] && node[props.labelKey].toLowerCase().indexOf(filt) !== -1;
    });
    const meta = computed(() => {
      const meta2 = {};
      const travel = (node, parent) => {
        const tickStrategy = node.tickStrategy || (parent ? parent.tickStrategy : props.tickStrategy);
        const key = node[props.nodeKey], isParent = node[props.childrenKey] && Array.isArray(node[props.childrenKey]) && node[props.childrenKey].length !== 0, selectable = node.disabled !== true && hasSelection.value === true && node.selectable !== false, expandable = node.disabled !== true && node.expandable !== false, hasTicking = tickStrategy !== "none", strictTicking = tickStrategy === "strict", leafFilteredTicking = tickStrategy === "leaf-filtered", leafTicking = tickStrategy === "leaf" || tickStrategy === "leaf-filtered";
        let tickable = node.disabled !== true && node.tickable !== false;
        if (leafTicking === true && tickable === true && parent && parent.tickable !== true) {
          tickable = false;
        }
        let localLazy = node.lazy;
        if (localLazy === true && lazy.value[key] !== void 0 && Array.isArray(node[props.childrenKey]) === true) {
          localLazy = lazy.value[key];
        }
        const m = {
          key,
          parent,
          isParent,
          lazy: localLazy,
          disabled: node.disabled,
          link: node.disabled !== true && (selectable === true || expandable === true && (isParent === true || localLazy === true)),
          children: [],
          matchesFilter: props.filter ? computedFilterMethod.value(node, props.filter) : true,
          selected: key === props.selected && selectable === true,
          selectable,
          expanded: isParent === true ? innerExpanded.value.includes(key) : false,
          expandable,
          noTick: node.noTick === true || strictTicking !== true && localLazy && localLazy !== "loaded",
          tickable,
          tickStrategy,
          hasTicking,
          strictTicking,
          leafFilteredTicking,
          leafTicking,
          ticked: strictTicking === true ? innerTicked.value.includes(key) : isParent === true ? false : innerTicked.value.includes(key)
        };
        meta2[key] = m;
        if (isParent === true) {
          m.children = node[props.childrenKey].map((n) => travel(n, m));
          if (props.filter) {
            if (m.matchesFilter !== true) {
              m.matchesFilter = m.children.some((n) => n.matchesFilter);
            } else if (m.noTick !== true && m.disabled !== true && m.tickable === true && leafFilteredTicking === true && m.children.every((n) => n.matchesFilter !== true || n.noTick === true || n.tickable !== true) === true) {
              m.tickable = false;
            }
          }
          if (m.matchesFilter === true) {
            if (m.noTick !== true && strictTicking !== true && m.children.every((n) => n.noTick) === true) {
              m.noTick = true;
            }
            if (leafTicking) {
              m.ticked = false;
              m.indeterminate = m.children.some((node2) => node2.indeterminate === true);
              m.tickable = m.tickable === true && m.children.some((node2) => node2.tickable);
              if (m.indeterminate !== true) {
                const sel = m.children.reduce((acc, meta3) => meta3.ticked === true ? acc + 1 : acc, 0);
                if (sel === m.children.length) {
                  m.ticked = true;
                } else if (sel > 0) {
                  m.indeterminate = true;
                }
              }
              if (m.indeterminate === true) {
                m.indeterminateNextState = m.children.every((meta3) => meta3.tickable !== true || meta3.ticked !== true);
              }
            }
          }
        }
        return m;
      };
      props.nodes.forEach((node) => travel(node, null));
      return meta2;
    });
    watch(() => props.ticked, (val) => {
      innerTicked.value = val;
    });
    watch(() => props.expanded, (val) => {
      innerExpanded.value = val;
    });
    function getNodeByKey(key) {
      const reduce = [].reduce;
      const find = (result, node) => {
        if (result || !node) {
          return result;
        }
        if (Array.isArray(node) === true) {
          return reduce.call(Object(node), find, result);
        }
        if (node[props.nodeKey] === key) {
          return node;
        }
        if (node[props.childrenKey]) {
          return find(null, node[props.childrenKey]);
        }
      };
      return find(null, props.nodes);
    }
    function getTickedNodes() {
      return innerTicked.value.map((key) => getNodeByKey(key));
    }
    function getExpandedNodes() {
      return innerExpanded.value.map((key) => getNodeByKey(key));
    }
    function isExpanded(key) {
      return key && meta.value[key] ? meta.value[key].expanded : false;
    }
    function collapseAll() {
      if (props.expanded !== void 0) {
        emit("update:expanded", []);
      } else {
        innerExpanded.value = [];
      }
    }
    function expandAll() {
      const expanded = [];
      const travel = (node) => {
        if (node[props.childrenKey] && node[props.childrenKey].length !== 0) {
          if (node.expandable !== false && node.disabled !== true) {
            expanded.push(node[props.nodeKey]);
            node[props.childrenKey].forEach(travel);
          }
        }
      };
      props.nodes.forEach(travel);
      if (props.expanded !== void 0) {
        emit("update:expanded", expanded);
      } else {
        innerExpanded.value = expanded;
      }
    }
    function setExpanded(key, state, node = getNodeByKey(key), m = meta.value[key]) {
      if (m.lazy && m.lazy !== "loaded") {
        if (m.lazy === "loading") {
          return;
        }
        lazy.value[key] = "loading";
        if (Array.isArray(node[props.childrenKey]) !== true) {
          node[props.childrenKey] = [];
        }
        emit("lazyLoad", {
          node,
          key,
          done: (children) => {
            lazy.value[key] = "loaded";
            node[props.childrenKey] = Array.isArray(children) === true ? children : [];
            nextTick(() => {
              const localMeta = meta.value[key];
              if (localMeta && localMeta.isParent === true) {
                localSetExpanded(key, true);
              }
            });
          },
          fail: () => {
            delete lazy.value[key];
            if (node[props.childrenKey].length === 0) {
              delete node[props.childrenKey];
            }
          }
        });
      } else if (m.isParent === true && m.expandable === true) {
        localSetExpanded(key, state);
      }
    }
    function localSetExpanded(key, state) {
      let target = innerExpanded.value;
      const shouldEmit = props.expanded !== void 0;
      if (shouldEmit === true) {
        target = target.slice();
      }
      if (state) {
        if (props.accordion) {
          if (meta.value[key]) {
            const collapse = [];
            if (meta.value[key].parent) {
              meta.value[key].parent.children.forEach((m) => {
                if (m.key !== key && m.expandable === true) {
                  collapse.push(m.key);
                }
              });
            } else {
              props.nodes.forEach((node) => {
                const k = node[props.nodeKey];
                if (k !== key) {
                  collapse.push(k);
                }
              });
            }
            if (collapse.length !== 0) {
              target = target.filter((k) => collapse.includes(k) === false);
            }
          }
        }
        target = target.concat([key]).filter((key2, index, self) => self.indexOf(key2) === index);
      } else {
        target = target.filter((k) => k !== key);
      }
      if (shouldEmit === true) {
        emit("update:expanded", target);
      } else {
        innerExpanded.value = target;
      }
    }
    function isTicked(key) {
      return key && meta.value[key] ? meta.value[key].ticked : false;
    }
    function setTicked(keys, state) {
      let target = innerTicked.value;
      const shouldEmit = props.ticked !== void 0;
      if (shouldEmit === true) {
        target = target.slice();
      }
      if (state) {
        target = target.concat(keys).filter((key, index, self) => self.indexOf(key) === index);
      } else {
        target = target.filter((k) => keys.includes(k) === false);
      }
      if (shouldEmit === true) {
        emit("update:ticked", target);
      }
    }
    function getSlotScope(node, meta2, key) {
      const scope = { tree: proxy, node, key, color: props.color, dark: isDark.value };
      injectProp(
        scope,
        "expanded",
        () => {
          return meta2.expanded;
        },
        (val) => {
          val !== meta2.expanded && setExpanded(key, val);
        }
      );
      injectProp(
        scope,
        "ticked",
        () => {
          return meta2.ticked;
        },
        (val) => {
          val !== meta2.ticked && setTicked([key], val);
        }
      );
      return scope;
    }
    function getChildren(nodes) {
      return (props.filter ? nodes.filter((n) => meta.value[n[props.nodeKey]].matchesFilter) : nodes).map((child) => getNode(child));
    }
    function getNodeMedia(node) {
      if (node.icon !== void 0) {
        return h(QIcon, {
          class: "q-tree__icon q-mr-sm",
          name: node.icon,
          color: node.iconColor
        });
      }
      const src = node.img || node.avatar;
      if (src) {
        return h("img", {
          class: `q-tree__${node.img ? "img" : "avatar"} q-mr-sm`,
          src
        });
      }
    }
    function onShow() {
      emit("afterShow");
    }
    function onHide() {
      emit("afterHide");
    }
    function getNode(node) {
      const key = node[props.nodeKey], m = meta.value[key], header = node.header ? slots[`header-${node.header}`] || slots["default-header"] : slots["default-header"];
      const children = m.isParent === true ? getChildren(node[props.childrenKey]) : [];
      const isParent = children.length !== 0 || m.lazy && m.lazy !== "loaded";
      let body = node.body ? slots[`body-${node.body}`] || slots["default-body"] : slots["default-body"];
      const slotScope = header !== void 0 || body !== void 0 ? getSlotScope(node, m, key) : null;
      if (body !== void 0) {
        body = h("div", { class: "q-tree__node-body relative-position" }, [
          h("div", { class: textColorClass.value }, [
            body(slotScope)
          ])
        ]);
      }
      return h("div", {
        key,
        class: `q-tree__node relative-position q-tree__node--${isParent === true ? "parent" : "child"}`
      }, [
        h("div", {
          class: "q-tree__node-header relative-position row no-wrap items-center" + (m.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (m.selected === true ? " q-tree__node--selected" : "") + (m.disabled === true ? " q-tree__node--disabled" : ""),
          tabindex: m.link === true ? 0 : -1,
          ariaExpanded: children.length > 0 ? m.expanded : null,
          role: "treeitem",
          onClick: (e) => {
            onClick(node, m, e);
          },
          onKeypress(e) {
            if (shouldIgnoreKey(e) !== true) {
              if (e.keyCode === 13) {
                onClick(node, m, e, true);
              } else if (e.keyCode === 32) {
                onExpandClick(node, m, e, true);
              }
            }
          }
        }, [
          h("div", {
            class: "q-focus-helper",
            tabindex: -1,
            ref: (el) => {
              blurTargets[m.key] = el;
            }
          }),
          m.lazy === "loading" ? h(QSpinner, {
            class: "q-tree__spinner",
            color: computedControlColor.value
          }) : isParent === true ? h(QIcon, {
            class: "q-tree__arrow" + (m.expanded === true ? " q-tree__arrow--rotate" : ""),
            name: computedIcon.value,
            onClick(e) {
              onExpandClick(node, m, e);
            }
          }) : null,
          m.hasTicking === true && m.noTick !== true ? h(QCheckbox, {
            class: "q-tree__tickbox",
            modelValue: m.indeterminate === true ? null : m.ticked,
            color: computedControlColor.value,
            dark: isDark.value,
            dense: true,
            keepColor: true,
            disable: m.tickable !== true,
            onKeydown: stopAndPrevent,
            "onUpdate:modelValue": (v) => {
              onTickedClick(m, v);
            }
          }) : null,
          h("div", {
            class: "q-tree__node-header-content col row no-wrap items-center" + (m.selected === true ? selectedColorClass.value : textColorClass.value)
          }, [
            header ? header(slotScope) : [
              getNodeMedia(node),
              h("div", node[props.labelKey])
            ]
          ])
        ]),
        isParent === true ? props.noTransition === true ? m.expanded === true ? h("div", {
          class: "q-tree__node-collapsible" + textColorClass.value,
          key: `${key}__q`
        }, [
          body,
          h("div", {
            class: "q-tree__children" + (m.disabled === true ? " q-tree__node--disabled" : ""),
            role: "group"
          }, children)
        ]) : null : h(QSlideTransition, {
          duration: props.duration,
          onShow,
          onHide
        }, () => withDirectives(
          h("div", {
            class: "q-tree__node-collapsible" + textColorClass.value,
            key: `${key}__q`
          }, [
            body,
            h("div", {
              class: "q-tree__children" + (m.disabled === true ? " q-tree__node--disabled" : ""),
              role: "group"
            }, children)
          ]),
          [[vShow, m.expanded]]
        )) : body
      ]);
    }
    function blur(key) {
      const blurTarget = blurTargets[key];
      blurTarget && blurTarget.focus();
    }
    function onClick(node, meta2, e, keyboard) {
      keyboard !== true && meta2.selectable !== false && blur(meta2.key);
      if (hasSelection.value && meta2.selectable) {
        if (props.noSelectionUnset === false) {
          emit("update:selected", meta2.key !== props.selected ? meta2.key : null);
        } else if (meta2.key !== props.selected) {
          emit("update:selected", meta2.key === void 0 ? null : meta2.key);
        }
      } else {
        onExpandClick(node, meta2, e, keyboard);
      }
      if (typeof node.handler === "function") {
        node.handler(node);
      }
    }
    function onExpandClick(node, meta2, e, keyboard) {
      if (e !== void 0) {
        stopAndPrevent(e);
      }
      keyboard !== true && meta2.selectable !== false && blur(meta2.key);
      setExpanded(meta2.key, !meta2.expanded, node, meta2);
    }
    function onTickedClick(meta2, state) {
      if (meta2.indeterminate === true) {
        state = meta2.indeterminateNextState;
      }
      if (meta2.strictTicking) {
        setTicked([meta2.key], state);
      } else if (meta2.leafTicking) {
        const keys = [];
        const travel = (meta3) => {
          if (meta3.isParent) {
            if (state !== true && meta3.noTick !== true && meta3.tickable === true) {
              keys.push(meta3.key);
            }
            if (meta3.leafTicking === true) {
              meta3.children.forEach(travel);
            }
          } else if (meta3.noTick !== true && meta3.tickable === true && (meta3.leafFilteredTicking !== true || meta3.matchesFilter === true)) {
            keys.push(meta3.key);
          }
        };
        travel(meta2);
        setTicked(keys, state);
      }
    }
    props.defaultExpandAll === true && expandAll();
    Object.assign(proxy, {
      getNodeByKey,
      getTickedNodes,
      getExpandedNodes,
      isExpanded,
      collapseAll,
      expandAll,
      setExpanded,
      isTicked,
      setTicked
    });
    return () => {
      const children = getChildren(props.nodes);
      return h(
        "div",
        {
          class: classes.value,
          role: "tree"
        },
        children.length === 0 ? props.filter ? props.noResultsLabel || $q.lang.tree.noResults : props.noNodesLabel || $q.lang.tree.noNodes : children
      );
    };
  }
});
function parseArg(arg) {
  const data = [0.06, 6, 50];
  if (typeof arg === "string" && arg.length) {
    arg.split(":").forEach((val, index) => {
      const v = parseFloat(val);
      v && (data[index] = v);
    });
  }
  return data;
}
const TouchSwipe = createDirective(
  {
    name: "touch-swipe",
    beforeMount(el, { value, arg, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      const mouseCapture = modifiers.mouseCapture === true ? "Capture" : "";
      const ctx = {
        handler: value,
        sensitivity: parseArg(arg),
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", `notPassive${mouseCapture}`],
              [document, "mouseup", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "notPassiveCapture"],
              [target, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          const pos = position(evt);
          ctx.event = {
            x: pos.left,
            y: pos.top,
            time: Date.now(),
            mouse: mouseEvent === true,
            dir: false
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            return;
          }
          const time = Date.now() - ctx.event.time;
          if (time === 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, absX = Math.abs(distX), distY = pos.top - ctx.event.y, absY = Math.abs(distY);
          if (ctx.event.mouse !== true) {
            if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
              ctx.end(evt);
              return;
            }
          } else if (window.getSelection().toString() !== "") {
            ctx.end(evt);
            return;
          } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
            return;
          }
          const velX = absX / time, velY = absY / time;
          if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = distY < 0 ? "up" : "down";
          }
          if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = distX < 0 ? "left" : "right";
          }
          if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "up";
          }
          if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "down";
          }
          if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "left";
          }
          if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "right";
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            if (ctx.event.mouse === true) {
              document.body.classList.add("no-pointer-events--children");
              document.body.classList.add("non-selectable");
              clearSelection();
              ctx.styleCleanup = (withDelay) => {
                ctx.styleCleanup = void 0;
                document.body.classList.remove("non-selectable");
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelay === true) {
                  setTimeout(remove, 50);
                } else {
                  remove();
                }
              };
            }
            ctx.handler({
              evt,
              touch: ctx.event.mouse !== true,
              mouse: ctx.event.mouse,
              direction: ctx.event.dir,
              duration: time,
              distance: {
                x: absX,
                y: absY
              }
            });
          } else {
            ctx.end(evt);
          }
        },
        end(evt) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(true);
          evt !== void 0 && ctx.event.dir !== false && stopAndPrevent(evt);
          ctx.event = void 0;
        }
      };
      el.__qtouchswipe = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof bindings.value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchswipe;
      }
    }
  }
);
function useRenderCache() {
  let cache = /* @__PURE__ */ Object.create(null);
  return {
    getCache: (key, defaultValue) => cache[key] === void 0 ? cache[key] = typeof defaultValue === "function" ? defaultValue() : defaultValue : cache[key],
    setCache(key, obj) {
      cache[key] = obj;
    },
    hasCache(key) {
      return Object.hasOwnProperty.call(cache, key);
    },
    clearCache(key) {
      if (key !== void 0) {
        delete cache[key];
      } else {
        cache = /* @__PURE__ */ Object.create(null);
      }
    }
  };
}
const usePanelChildProps = {
  name: { required: true },
  disable: Boolean
};
const PanelWrapper = {
  setup(_, { slots }) {
    return () => h("div", {
      class: "q-panel scroll",
      role: "tabpanel"
    }, hSlot(slots.default));
  }
};
const usePanelProps = {
  modelValue: {
    required: true
  },
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,
  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [String, Number],
    default: 300
  },
  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number
};
const usePanelEmits = ["update:modelValue", "beforeTransition", "transition"];
function usePanel() {
  const { props, emit, proxy } = getCurrentInstance();
  const { getCache } = useRenderCache();
  let panels, forcedPanelTransition;
  const panelIndex = ref(null);
  const panelTransition = ref(null);
  function onSwipe(evt) {
    const dir = props.vertical === true ? "up" : "left";
    goToPanelByOffset((proxy.$q.lang.rtl === true ? -1 : 1) * (evt.direction === dir ? 1 : -1));
  }
  const panelDirectives = computed(() => {
    return [[
      TouchSwipe,
      onSwipe,
      void 0,
      {
        horizontal: props.vertical !== true,
        vertical: props.vertical,
        mouse: true
      }
    ]];
  });
  const transitionPrev = computed(
    () => props.transitionPrev || `slide-${props.vertical === true ? "down" : "right"}`
  );
  const transitionNext = computed(
    () => props.transitionNext || `slide-${props.vertical === true ? "up" : "left"}`
  );
  const transitionStyle = computed(
    () => `--q-transition-duration: ${props.transitionDuration}ms`
  );
  const contentKey = computed(() => typeof props.modelValue === "string" || typeof props.modelValue === "number" ? props.modelValue : String(props.modelValue));
  const keepAliveProps = computed(() => ({
    include: props.keepAliveInclude,
    exclude: props.keepAliveExclude,
    max: props.keepAliveMax
  }));
  const needsUniqueKeepAliveWrapper = computed(
    () => props.keepAliveInclude !== void 0 || props.keepAliveExclude !== void 0
  );
  watch(() => props.modelValue, (newVal, oldVal) => {
    const index = isValidPanelName(newVal) === true ? getPanelIndex(newVal) : -1;
    if (forcedPanelTransition !== true) {
      updatePanelTransition(
        index === -1 ? 0 : index < getPanelIndex(oldVal) ? -1 : 1
      );
    }
    if (panelIndex.value !== index) {
      panelIndex.value = index;
      emit("beforeTransition", newVal, oldVal);
      nextTick(() => {
        emit("transition", newVal, oldVal);
      });
    }
  });
  function nextPanel() {
    goToPanelByOffset(1);
  }
  function previousPanel() {
    goToPanelByOffset(-1);
  }
  function goToPanel(name) {
    emit("update:modelValue", name);
  }
  function isValidPanelName(name) {
    return name !== void 0 && name !== null && name !== "";
  }
  function getPanelIndex(name) {
    return panels.findIndex((panel) => {
      return panel.props.name === name && panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function getEnabledPanels() {
    return panels.filter((panel) => {
      return panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function updatePanelTransition(direction) {
    const val = direction !== 0 && props.animated === true && panelIndex.value !== -1 ? "q-transition--" + (direction === -1 ? transitionPrev.value : transitionNext.value) : null;
    if (panelTransition.value !== val) {
      panelTransition.value = val;
    }
  }
  function goToPanelByOffset(direction, startIndex = panelIndex.value) {
    let index = startIndex + direction;
    while (index !== -1 && index < panels.length) {
      const opt = panels[index];
      if (opt !== void 0 && opt.props.disable !== "" && opt.props.disable !== true) {
        updatePanelTransition(direction);
        forcedPanelTransition = true;
        emit("update:modelValue", opt.props.name);
        setTimeout(() => {
          forcedPanelTransition = false;
        });
        return;
      }
      index += direction;
    }
    if (props.infinite === true && panels.length !== 0 && startIndex !== -1 && startIndex !== panels.length) {
      goToPanelByOffset(direction, direction === -1 ? panels.length : -1);
    }
  }
  function updatePanelIndex() {
    const index = getPanelIndex(props.modelValue);
    if (panelIndex.value !== index) {
      panelIndex.value = index;
    }
    return true;
  }
  function getPanelContentChild() {
    const panel = isValidPanelName(props.modelValue) === true && updatePanelIndex() && panels[panelIndex.value];
    return props.keepAlive === true ? [
      h(KeepAlive, keepAliveProps.value, [
        h(
          needsUniqueKeepAliveWrapper.value === true ? getCache(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
          { key: contentKey.value, style: transitionStyle.value },
          () => panel
        )
      ])
    ] : [
      h("div", {
        class: "q-panel scroll",
        style: transitionStyle.value,
        key: contentKey.value,
        role: "tabpanel"
      }, [panel])
    ];
  }
  function getPanelContent() {
    if (panels.length === 0) {
      return;
    }
    return props.animated === true ? [h(Transition, { name: panelTransition.value }, getPanelContentChild)] : getPanelContentChild();
  }
  function updatePanelsList(slots) {
    panels = getNormalizedVNodes(
      hSlot(slots.default, [])
    ).filter(
      (panel) => panel.props !== null && panel.props.slot === void 0 && isValidPanelName(panel.props.name) === true
    );
    return panels.length;
  }
  function getPanels() {
    return panels;
  }
  Object.assign(proxy, {
    next: nextPanel,
    previous: previousPanel,
    goTo: goToPanel
  });
  return {
    panelIndex,
    panelDirectives,
    updatePanelsList,
    updatePanelIndex,
    getPanelContent,
    getEnabledPanels,
    getPanels,
    isValidPanelName,
    keepAliveProps,
    needsUniqueKeepAliveWrapper,
    goToPanelByOffset,
    goToPanel,
    nextPanel,
    previousPanel
  };
}
const QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
const QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
const QSplitter = createComponent({
  name: "QSplitter",
  props: {
    ...useDarkProps,
    modelValue: {
      type: Number,
      required: true
    },
    reverse: Boolean,
    unit: {
      type: String,
      default: "%",
      validator: (v) => ["%", "px"].includes(v)
    },
    limits: {
      type: Array,
      validator: (v) => {
        if (v.length !== 2) return false;
        if (typeof v[0] !== "number" || typeof v[1] !== "number") return false;
        return v[0] >= 0 && v[0] <= v[1];
      }
    },
    emitImmediately: Boolean,
    horizontal: Boolean,
    disable: Boolean,
    beforeClass: [Array, String, Object],
    afterClass: [Array, String, Object],
    separatorClass: [Array, String, Object],
    separatorStyle: [Array, String, Object]
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const rootRef = ref(null);
    const sideRefs = {
      before: ref(null),
      after: ref(null)
    };
    const classes = computed(
      () => `q-splitter no-wrap ${props.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${props.disable === true ? "disabled" : "workable"}` + (isDark.value === true ? " q-splitter--dark" : "")
    );
    const propName = computed(() => props.horizontal === true ? "height" : "width");
    const side = computed(() => props.reverse !== true ? "before" : "after");
    const computedLimits = computed(() => props.limits !== void 0 ? props.limits : props.unit === "%" ? [10, 90] : [50, Infinity]);
    function getCSSValue(value) {
      return (props.unit === "%" ? value : Math.round(value)) + props.unit;
    }
    const styles = computed(() => ({
      [side.value]: {
        [propName.value]: getCSSValue(props.modelValue)
      }
    }));
    let __dir, __maxValue, __value, __multiplier, __normalized;
    function pan(evt) {
      if (evt.isFirst === true) {
        const size = rootRef.value.getBoundingClientRect()[propName.value];
        __dir = props.horizontal === true ? "up" : "left";
        __maxValue = props.unit === "%" ? 100 : size;
        __value = Math.min(__maxValue, computedLimits.value[1], Math.max(computedLimits.value[0], props.modelValue));
        __multiplier = (props.reverse !== true ? 1 : -1) * (props.horizontal === true ? 1 : $q.lang.rtl === true ? -1 : 1) * (props.unit === "%" ? size === 0 ? 0 : 100 / size : 1);
        rootRef.value.classList.add("q-splitter--active");
        return;
      }
      if (evt.isFinal === true) {
        if (__normalized !== props.modelValue) {
          emit("update:modelValue", __normalized);
        }
        rootRef.value.classList.remove("q-splitter--active");
        return;
      }
      const val = __value + __multiplier * (evt.direction === __dir ? -1 : 1) * evt.distance[props.horizontal === true ? "y" : "x"];
      __normalized = Math.min(__maxValue, computedLimits.value[1], Math.max(computedLimits.value[0], val));
      sideRefs[side.value].value.style[propName.value] = getCSSValue(__normalized);
      if (props.emitImmediately === true && props.modelValue !== __normalized) {
        emit("update:modelValue", __normalized);
      }
    }
    const sepDirective = computed(() => {
      return [[
        TouchPan,
        pan,
        void 0,
        {
          [props.horizontal === true ? "vertical" : "horizontal"]: true,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      ]];
    });
    function normalize(val, limits) {
      if (val < limits[0]) {
        emit("update:modelValue", limits[0]);
      } else if (val > limits[1]) {
        emit("update:modelValue", limits[1]);
      }
    }
    watch(() => props.modelValue, (v) => {
      normalize(v, computedLimits.value);
    });
    watch(() => props.limits, () => {
      nextTick(() => {
        normalize(props.modelValue, computedLimits.value);
      });
    });
    return () => {
      const child = [
        h("div", {
          ref: sideRefs.before,
          class: [
            "q-splitter__panel q-splitter__before" + (props.reverse === true ? " col" : ""),
            props.beforeClass
          ],
          style: styles.value.before
        }, hSlot(slots.before)),
        h("div", {
          class: [
            "q-splitter__separator",
            props.separatorClass
          ],
          style: props.separatorStyle,
          "aria-disabled": props.disable === true ? "true" : void 0
        }, [
          hDir(
            "div",
            { class: "q-splitter__separator-area absolute-full" },
            hSlot(slots.separator),
            "sep",
            props.disable !== true,
            () => sepDirective.value
          )
        ]),
        h("div", {
          ref: sideRefs.after,
          class: [
            "q-splitter__panel q-splitter__after" + (props.reverse === true ? "" : " col"),
            props.afterClass
          ],
          style: styles.value.after
        }, hSlot(slots.after))
      ];
      return h("div", {
        class: classes.value,
        ref: rootRef
      }, hMergeSlot(slots.default, child));
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Research"
  },
  __name: "Research",
  setup(__props, { expose: __expose }) {
    __expose();
    const splitterModel = ref(25);
    const selected = ref("Computational Optimization");
    const filter = ref("");
    const filterRef = ref(null);
    function resetFilter() {
      filter.value = "";
      filterRef.value.focus();
    }
    const researchTreeNodes = [
      {
        label: "Computational Optimization",
        children: [
          {
            label: "AI Enhanced Optimization"
          },
          {
            label: "Particle Filter Based Optimization"
          },
          {
            label: "Quasi-Newton Methods"
          }
        ]
      },
      {
        label: "Hardware Verification",
        children: [
          {
            label: "Coverage Directed Generation"
          }
        ]
      },
      {
        label: "Natural Language Processing",
        children: [
          {
            label: "Systematic Reviews"
          }
        ]
      },
      {
        label: "Computational Biology",
        children: [
          {
            label: "Single Particle Tracking"
          }
        ]
      }
    ];
    const __returned__ = { splitterModel, selected, filter, filterRef, resetFilter, researchTreeNodes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-88bfe501"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "q-pa-md row items-start q-gutter-md" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "row justify-start" }, [
  /* @__PURE__ */ createBaseVNode("h6", null, " Research By Topic: ")
], -1));
const _hoisted_3 = { class: "row justify-between" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, " Click on the topic text in the tree below to see my research papers and code. Use the search bar to filter the topics. ")
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col-1" }, null, -1));
const _hoisted_6 = { class: "col" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
    /* @__PURE__ */ createBaseVNode("h6", null, " Computational Optimization: "),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode(" The goal of an optimization problem is to minimize (find the smallest value of) or maximize (find the largest value of) an objective function. Computational optimization uses computers to solve optimization problems. For more, see "),
      /* @__PURE__ */ createBaseVNode("a", { href: "https://en.wikipedia.org/wiki/Mathematical_optimization" }, "Wikipedia"),
      /* @__PURE__ */ createTextVNode(". ")
    ])
  ])
], -1));
const _hoisted_8 = { class: "column" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("h6", null, " AI Enhanced Optimization: "),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Summary"),
    /* @__PURE__ */ createTextVNode(": Papers integrating artificial intelligence (AI) models with optimization algorithms. ")
  ])
], -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(", Haber, E., Gal, R., and Ziv, A. (2023) Neural Network Accelerated Implicit Filtering: Integrating Neural Network Surrogates With Provably Convergent Derivative Free Optimization Methods. Proceedings of the 40th International Conference on Machine Learning (ICML). PMLR 202:14376-14389. ")
  ])
], -1));
const _hoisted_11 = { class: "col" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(", Haber, E., Gal, R., and Ziv, A. (2021) Deep Neural Network Accelerated Implicit Filtering. ")
  ])
], -1));
const _hoisted_13 = { class: "col" };
const _hoisted_14 = { class: "column" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("h6", null, " Particle Filter Based Optimization: "),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Summary"),
    /* @__PURE__ */ createTextVNode(": Papers developing optimization algorithms motivated by particle filtering (i.e. sequential Monte Carlo) techniques. ")
  ])
], -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(", and Reich, S. (2024) EnKSGD: A Class of Preconditioned Black Box Optimization and Inversion Algorithms. SIAM Journal on Scientific Computing (SISC). 46, pp. A2101 - A2122 ")
  ])
], -1));
const _hoisted_17 = { class: "col" };
const _hoisted_18 = { class: "column" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("h6", null, " Quasi-Newton Methods: "),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Summary"),
    /* @__PURE__ */ createTextVNode(": Papers developing variations of quasi-Newton methods, such as BFGS. ")
  ])
], -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(" and Haber, E. (2023) Secant penalized BFGS: a noise robust quasi-Newton method via penalizing the secant condition. Computational Optimization and Applications (Comput Optim Appl). 84:651-702. ")
  ])
], -1));
const _hoisted_21 = { class: "col" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
    /* @__PURE__ */ createBaseVNode("h6", null, " Hardware Verification: "),
    /* @__PURE__ */ createBaseVNode("p", null, " Modern integrated circuits can be found almost everywhere today. The goal of hardware verification is to ensure that a circuit design functions correctly and meets the desired specifications. ")
  ])
], -1));
const _hoisted_23 = { class: "column" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("h6", null, " Coverage Directed Generation: "),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Summary"),
    /* @__PURE__ */ createTextVNode(": Papers applying derivative free optimization (DFO) techniques to solve the coverage directed generation (CDG) problem. ")
  ])
], -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Gal, R., Haber, E., "),
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(", Mouallem, M., Saleh, B., and Ziv, A. (2021) Using Deep Neural Networks And Derivative Free Optimization To Accelerate Coverage Closure. 2021 ACM/IEEE 3rd Workshop on Machine Learning for CAD (MLCAD). pp. 1-6. ")
  ])
], -1));
const _hoisted_26 = { class: "col" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Gal, R., Haber, E., Ibraheem, W., "),
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(", and Ziv, A. (2021) Automatic Scalable System for the Coverage-Directed Generation (CDG) Problem. 2021 Design, Automation & Test in Europe Conference & Exhibition (DATE). pp. 206-211. ")
  ])
], -1));
const _hoisted_28 = { class: "col" };
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Gal, R., Haber, E., "),
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(", Saleh, B., and Ziv, A. (2021) How to catch a lion in the desert: on the solution of the coverage directed generation (cdg) problem. Optimization and Engineering (Optim Eng). 22:217-245 ")
  ])
], -1));
const _hoisted_30 = { class: "col" };
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
    /* @__PURE__ */ createBaseVNode("h6", null, " Natural Language Processing: "),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode(" Natural language processing enables computers to analyze and understand human language. For more, see "),
      /* @__PURE__ */ createBaseVNode("a", { href: "https://en.wikipedia.org/wiki/Natural_language_processing" }, "Wikipedia"),
      /* @__PURE__ */ createTextVNode(". ")
    ])
  ])
], -1));
const _hoisted_32 = { class: "column" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("h6", null, " Systematic Reviews: "),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Summary"),
    /* @__PURE__ */ createTextVNode(": Papers applying large language model (LLM) techniques to systematic literature reviews. ")
  ])
], -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Begert, D., Granek, J., "),
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(", and Brogly, C. (2020) Towards automating systematic reviews on immunization using an advanced natural language processing-based extraction system. Canada Communicable Disease Report (CCDR). 46(6):174-179. ")
  ])
], -1));
const _hoisted_35 = { class: "col" };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
    /* @__PURE__ */ createBaseVNode("h6", null, " Computational Biology: "),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode(" Computational biology uses computers to model and understand biological systems. For more, see "),
      /* @__PURE__ */ createBaseVNode("a", { href: "https://en.wikipedia.org/wiki/Computational_biology" }, "Wikipedia"),
      /* @__PURE__ */ createTextVNode(". ")
    ])
  ])
], -1));
const _hoisted_37 = { class: "column" };
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("h6", null, " Single Particle Tracking: "),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "Summary"),
    /* @__PURE__ */ createTextVNode(": Papers investigating single particle tracking (SPT) of receptors on immune cells. ")
  ])
], -1));
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "col" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Abraham, L., Lu, H., Falcao, R.C., Scurll, J., Jou, T., "),
    /* @__PURE__ */ createBaseVNode("strong", null, "Irwin, B."),
    /* @__PURE__ */ createTextVNode(", Tafteh, R., Gold, M., and Coombs, D. (2017) Limitations of Qdot labelling compared to directly-conjugated probes for single particle tracking of B cell receptor mobility. Scientific Reports. Volume 7, Article #: 11379. ")
  ])
], -1));
const _hoisted_40 = { class: "col" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(QCard, {
          class: "bg-secondary text-white page-card",
          flat: "",
          bordered: ""
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                _hoisted_2,
                createBaseVNode("div", _hoisted_3, [
                  _hoisted_4,
                  _hoisted_5,
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(QInput, {
                      filled: "",
                      dark: "",
                      ref: "filterRef",
                      modelValue: $setup.filter,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.filter = $event),
                      label: "Search Topics"
                    }, {
                      append: withCtx(() => [
                        $setup.filter !== "" ? (openBlock(), createBlock(QIcon, {
                          key: 0,
                          name: "clear",
                          class: "cursor-pointer",
                          onClick: $setup.resetFilter
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(QSeparator, {
              spaced: "",
              dark: ""
            }),
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  createVNode(QSplitter, {
                    modelValue: $setup.splitterModel,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.splitterModel = $event),
                    dark: ""
                  }, {
                    before: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(QTree, {
                          dark: "",
                          "no-transition": "",
                          nodes: $setup.researchTreeNodes,
                          "node-key": "label",
                          filter: $setup.filter,
                          "text-color": "white",
                          "selected-color": "info",
                          selected: $setup.selected,
                          "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.selected = $event),
                          "default-expand-all": ""
                        }, null, 8, ["filter", "selected"])
                      ])
                    ]),
                    after: withCtx(() => [
                      createVNode(QTabPanels, {
                        modelValue: $setup.selected,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.selected = $event),
                        animated: "",
                        class: "bg-secondary text-white",
                        "transition-prev": "jump-up",
                        "transition-next": "jump-up"
                      }, {
                        default: withCtx(() => [
                          createVNode(QTabPanel, { name: "Computational Optimization" }, {
                            default: withCtx(() => [
                              _hoisted_7
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "AI Enhanced Optimization" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_8, [
                                _hoisted_9,
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_10,
                                createBaseVNode("div", _hoisted_11, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "paper",
                                        icon: "bookmarks",
                                        label: "Paper",
                                        href: "https://proceedings.mlr.press/v202/irwin23a.html"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "code",
                                        icon: "code",
                                        label: "Code",
                                        href: "https://github.com/0x4249/NNAIF"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "conference",
                                        icon: "public",
                                        label: "Conference Page",
                                        href: "https://icml.cc/virtual/2023/poster/23590"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_12,
                                createBaseVNode("div", _hoisted_13, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "preprint",
                                        icon: "text_snippet",
                                        label: "Preprint",
                                        href: "https://arxiv.org/abs/2105.08883"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "Particle Filter Based Optimization" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_14, [
                                _hoisted_15,
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_16,
                                createBaseVNode("div", _hoisted_17, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "paper",
                                        icon: "bookmarks",
                                        label: "Paper",
                                        href: "https://doi.org/10.1137/23M1561142"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "code",
                                        icon: "code",
                                        label: "Code",
                                        href: "https://github.com/0x4249/EnKSGD"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "preprint",
                                        icon: "text_snippet",
                                        label: "Preprint",
                                        href: "https://arxiv.org/abs/2303.16494"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "Quasi-Newton Methods" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_18, [
                                _hoisted_19,
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_20,
                                createBaseVNode("div", _hoisted_21, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "paper",
                                        icon: "bookmarks",
                                        label: "Paper",
                                        href: "https://doi.org/10.1007/s10589-022-00448-x"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "code",
                                        icon: "code",
                                        label: "Code",
                                        href: "https://github.com/0x4249/Secant-Penalized-BFGS"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "preprint",
                                        icon: "text_snippet",
                                        label: "Preprint",
                                        href: "https://arxiv.org/abs/2010.01275"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "Hardware Verification" }, {
                            default: withCtx(() => [
                              _hoisted_22
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "Coverage Directed Generation" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_23, [
                                _hoisted_24,
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_25,
                                createBaseVNode("div", _hoisted_26, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "paper",
                                        icon: "bookmarks",
                                        label: "Paper",
                                        href: "https://doi.org/10.1109/mlcad52597.2021.9531234"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "conference",
                                        icon: "public",
                                        label: "Conference Page",
                                        href: "https://mlcad.itec.kit.edu"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_27,
                                createBaseVNode("div", _hoisted_28, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "paper",
                                        icon: "bookmarks",
                                        label: "Paper",
                                        href: "https://doi.org/10.23919/date51398.2021.9474160"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "conference",
                                        icon: "public",
                                        label: "Conference Page",
                                        href: "https://past.date-conference.com/proceedings-archive/2021/html/1437.html"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_29,
                                createBaseVNode("div", _hoisted_30, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "paper",
                                        icon: "bookmarks",
                                        label: "Paper",
                                        href: "https://doi.org/10.1007/s11081-020-09507-w"
                                      }),
                                      createVNode(QRouteTab, {
                                        name: "preprint",
                                        icon: "text_snippet",
                                        label: "Preprint",
                                        href: "https://arxiv.org/abs/1910.00170"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "Natural Language Processing" }, {
                            default: withCtx(() => [
                              _hoisted_31
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "Systematic Reviews" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_32, [
                                _hoisted_33,
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_34,
                                createBaseVNode("div", _hoisted_35, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "paper",
                                        icon: "bookmarks",
                                        label: "Paper",
                                        href: "https://doi.org/10.14745/ccdr.v46i06a04"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "Computational Biology" }, {
                            default: withCtx(() => [
                              _hoisted_36
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "Single Particle Tracking" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_37, [
                                _hoisted_38,
                                createVNode(QSeparator, {
                                  spaced: "",
                                  dark: ""
                                }),
                                _hoisted_39,
                                createBaseVNode("div", _hoisted_40, [
                                  createVNode(QTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(QRouteTab, {
                                        name: "paper",
                                        icon: "bookmarks",
                                        label: "Paper",
                                        href: "https://doi.org/10.1038/s41598-017-11563-9"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
const Research = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-88bfe501"], ["__file", "Research.vue"]]);
export {
  Research as default
};
