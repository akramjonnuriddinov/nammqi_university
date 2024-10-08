<script setup lang="ts">
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue'
import Quill from 'quill'

const props = defineProps({
  content: String,
  value: String,
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    required: false,
    default: () => ({})
  },
  globalOptions: {
    type: Object,
    required: false,
    default: () => ({})
  },
  editEditor: {
    type: [Object, String],
    required: true,
    default: () => {}
  }
})

const emit = defineEmits(['input', 'change', 'blur', 'focus', 'ready'])
const editor = ref<HTMLElement | null>(null)
const quill = ref<any>(null)
const _content = ref<string>('')

const defaultOptions = {
  theme: 'snow',
  boundary: document.body,
  modules: {
    toolbar: [
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, false] }],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'video'],
      [{ align: [] }]
    ]
  },
  placeholder: '',
  readOnly: false
}

const initialize = () => {
  if (editor.value) {
    // Options
    const _options = Object.assign({}, defaultOptions, props.globalOptions, props.options)

    // Instance
    quill.value = new Quill(editor.value, _options)

    // Set editor content
    if (props.value || props.content) {
      quill.value.root.innerHTML = props.value || props.content
    }

    // Disabled editor
    quill.value.enable(!props.disabled)

    // Mark model as touched if editor lost focus
    quill.value.on('selection-change', (range: any) => {
      if (!range) {
        emit('blur', quill.value)
      } else {
        emit('focus', quill.value)
      }
    })

    // Update model if text changes
    quill.value.on('text-change', () => {
      const html = quill.value.root.innerHTML || props.editEditor
      const text = quill.value.getText()
      _content.value = html
      emit('input', _content.value)
      emit('change', { html, text, quill: quill.value })
    })

    // Emit ready event
    emit('ready', quill.value)
  }
}

onMounted(() => {
  initialize()
})

watch(
  () => props.content,
  (newVal) => {
    if (quill.value) {
      if (newVal && newVal !== _content.value) {
        _content.value = newVal
        quill.value.root.innerHTML = newVal
      } else if (!newVal) {
        quill.value.root.innerHTML = ''
      }
    }
  }
)

watch(
  () => props.value,
  (newVal) => {
    if (quill.value) {
      if (newVal && newVal !== _content.value) {
        _content.value = newVal
        quill.value.root.innerHTML = newVal
      } else if (!newVal) {
        quill.value.root.innerHTML = ''
      }
    }
  }
)

watch(
  () => props.disabled,
  (newVal) => {
    if (quill.value) {
      quill.value.enable(!newVal)
    }
  }
)

// Preview functionality
const showPreview = ref(false)
const previewContent = ref('')

const openPreview = () => {
  if (quill.value) {
    previewContent.value = quill.value.root.innerHTML
    showPreview.value = true
  }
}

const closePreview = () => {
  showPreview.value = false
  previewContent.value = ''
}
</script>

<template>
  <div>
    <div class="quill-editor relative rounded-md">
      <slot class="rounded-md" name="toolbar"></slot>
      <div
        class="absolute h-full max-h-[400px] min-h-[400px] w-full overflow-y-auto border"
        ref="editor"
      ></div>
    </div>
    <!-- Preview Button -->
    <button @click="openPreview" class="mt-4 p-2">Ko'rish</button> |
    <button @click="closePreview" class="mt-4 p-2 text-red-500">Yopish</button>

    <!-- Preview Modal -->
    <div v-if="showPreview" @click="closePreview" class="modal">
      <div class="modal-content" @click.stop>
        <button v-if="false" @click="closePreview" class="mt-4 p-2 bg-red-500 text-white rounded">
          Close
        </button>
        <div v-html="previewContent" class="preview-content"></div>
      </div>
    </div>
  </div>
</template>

<style>
.ql-editor {
  position: absolute;
  top: 0;
  width: 100%;
}

.ql-toolbar.ql-snow {
  border-color: rgb(229, 231, 235) !important;
  border-radius: 6px 6px 0 0;
}

.ql-container,
.ql-editor {
  border-radius: 0 0 6px 6px;
  border-color: rgb(229, 231, 235) !important;
}
</style>
