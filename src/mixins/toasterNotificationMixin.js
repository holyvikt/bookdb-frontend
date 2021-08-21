const toasterNotificationMixin = {
    methods: {
        showSuccessNotification(message, timeout = 5000) {
            this.$toast.success(message, {
                duration: timeout
            })
        },
        showErrorNotification(message, timeout = 5000) {
            this.$toast.error(message, {
                duration: timeout
            })
        }
    }
}

export default toasterNotificationMixin