module.exports = function(grunt){
    grunt.initConfig({
        slim: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    './html/index.html': './slim/index.slim'
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    './css/main.css': './sass/index/main.scss'       // 'destination': 'source'
                }
            }
        },
        watch: {
            files: ['**/**/*.scss', '**/**/*.slim'],
            tasks: ['slim', 'sass']
        }
    });

    grunt.loadNpmTasks('grunt-slim');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['slim', 'sass', 'watch']);
}