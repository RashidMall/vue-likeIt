const submissionComponent = {
    template:
    `<div>
        <img class="card-img-top" v-bind:src="submission.submissionImage" alt="Card image cap">
        <div class="card-body">
            <div class="d-inline-block float-right">
                <span class="icon is-small" v-on:click="upvote(submission.id)">
                    <i class="fa fa-chevron-up"></i>
                    <strong class="has-text-info">{{ submission.votes }}</strong>
                </span>
            </div>
            <h5 class="card-title d-inline-block">
                <a v-bind:href="submission.url" class="has-text-info">{{ submission.title }}</a>
                <span class="badge badge-pill badge-primary">#{{ submission.id }}</span>
            </h5>
            <p class="card-text">{{ submission.description }}</p>
            <small class="w-25">
                Submitted by:
                <img v-bind:src="submission.avatar" alt="daniel's avatar" class="img-fluid avatar">
            </small>
        </div>
    </div>`,
    props: ['submission', 'submissions'],
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(
                submission => submission.id === submissionId
            );
            submission.votes++;
        }
    }
};

new Vue({
    el: '#app',
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmissions () {
            return this.submissions.sort((a,b) => {
                return b.votes - a.votes
            });
        }
    },
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(
                submission => submission.id === submissionId
            );
            submission.votes++;
        }
    },
    components: {
        'submission-component': submissionComponent
    }
});