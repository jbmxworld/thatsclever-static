module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run test',
            numberOfRuns: 3,
            url: [
                'http://localhost:8080',
                'http://localhost:8080/shop.html',
                'http://localhost:8080/blog.html',
            ],
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.8 }],
                'categories:accessibility': ['error', { minScore: 0.8 }],
                'categories:best-practices': ['error', { minScore: 0.8 }],
                'categories:seo': ['error', { minScore: 0.8 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
