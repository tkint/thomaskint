import { onMounted, watch } from 'vue';
import { Modal } from 'bootstrap';

export const modalMixin = {
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
        },
    },
};

export default (props: typeof modalMixin.props, emit: Function) => {
    const modalId = `modal-${(Math.random() * 1000).toFixed(0)}`;

    onMounted(() => {
        const modalDiv = document.getElementById(modalId);
        if (modalDiv) {
            modalDiv.addEventListener('hidden.bs.modal', () => {
                console.log('hidden', emit);
                emit('update:modelValue', false);
            });
        }
    });

    watch<Boolean>(() => !!props.modelValue, (newValue) => {
        const modalDiv = document.getElementById(modalId);
        if (modalDiv) {
            const modal = new Modal(modalDiv);
            if (newValue) {
                modal.show();
            } else {
                modal.hide();
            }
        }
    });

    return {
        modalId,
    };
}
