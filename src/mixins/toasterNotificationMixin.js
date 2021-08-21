import Toaster from "@meforma/vue-toaster"

const toasterNotificationMixin = {
    methods: {
        showSuccessNotification(message, timeout = 5000) {
            this.$toast.success(message, timeout)
        },
        showErrorNotification(message, timeout = 5000) {
            this.$toast.error(message, timeout)
        }
    }
}

export default toasterNotificationMixin