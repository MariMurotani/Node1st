module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Gruntの設定
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            development: {
                options: {
                    config: 'config.rb',
                    environment: 'development',
                    bundleExec: true
                }
            },
            production: {
                options: {
                    config: 'config.rb',
                    environment: 'production',
                    bundleExec: true
                }
            }
        },
        watch: {
            compass: {
                files: 'src/sass/*',
                tasks: 'compass:development'
            }
        },
        connect: {
            local: {
                options: {
                    keepalive: true,
                    port: 9000,
                    base: 'src'
                }
            }
        },
    });
    //defaultタスクの定義
    grunt.registerTask("development", ["compass:development" ,"watch" , "connect"]);
    grunt.registerTask("production", ["compass:production"]);
    grunt.registerTask("msg", function() {
        //ログメッセージの出力
        grunt.log.write('Logging some stuff...').ok();

    });
};