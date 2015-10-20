'use strict';

let composer = require('./') ;
let fs = require('fs') ;
let mocha = require('mocha') ;
let should = require('should') ;


  describe('composer',function(){

    it('test all parameters with 2 service',function(done){
      let outputYML = fs.readFileSync('./tests/1_output.yml');

      composer.generate(fs.readFileSync('./tests/1_input.json'),function(err,result){
          should.not.exist(err) ;
          should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
        });
      done() ;
    }) ;
    it('test all parameters with 2 service nok',function(done){
      let outputYML = fs.readFileSync('./tests/2_output.yml');

      composer.generate(fs.readFileSync('./tests/2_input.json'),function(err,result){
          should.not.exist(err) ;
          should.notEqual(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;
    it('ports missing',function(done){
      let outputYML = fs.readFileSync('./tests/3_output.yml');

      composer.generate(fs.readFileSync('./tests/3_input.json'),function(err,result){
          should.not.exist(err) ;
          should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;

    it('ports missing value',function(done){
      let outputYML = fs.readFileSync('./tests/8_output.yml');

      composer.generate(fs.readFileSync('./tests/8_input.json'),function(err,result){
        should.not.exist(err) ;
        should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;

    it('environment missing value',function(done){
      let outputYML = fs.readFileSync('./tests/4_output.yml');
      composer.generate(fs.readFileSync('./tests/4_input.json'),function(err,result){
        should.not.exist(err) ;
        should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;

    it('environment missing',function(done){
      let outputYML = fs.readFileSync('./tests/5_output.yml');

      composer.generate(fs.readFileSync('./tests/5_input.json'),function(err,result){
        should.not.exist(err) ;
        should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;

    it('extra_hosts missing',function(done){
      let outputYML = fs.readFileSync('./tests/6_output.yml');

      composer.generate(fs.readFileSync('./tests/6_input.json'),function(err,result){
        should.not.exist(err) ;
        should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;

    it('extra_hosts missing value',function(done){
      let outputYML = fs.readFileSync('./tests/7_output.yml');

      composer.generate(fs.readFileSync('./tests/7_input.json'),function(err,result){
        should.not.exist(err) ;
        should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;

    it('input json is missing',function(done){
      composer.generate(null,function(err,result){
         should.equal(err.message,'json is missing') ;
      })
      done();
    });

    it('environment json is invalid',function(done){
        composer.generate(fs.readFileSync('./tests/9_input.json'),function(err,result){
          should.exists(err) ;
          done() ;
        }) ;
    });

    it('expose',function(done){
      let outputYML = fs.readFileSync('./tests/10_output.yml');

      composer.generate(fs.readFileSync('./tests/10_input.json'),function(err,result){
        should.not.exist(err) ;
        should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;
    it('expose is missing',function(done){
      let outputYML = fs.readFileSync('./tests/11_output.yml');

      composer.generate(fs.readFileSync('./tests/11_input.json'),function(err,result){
        should.not.exist(err) ;
        should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;
    it('command',function(done){
      let outputYML = fs.readFileSync('./tests/12_output.yml');

      composer.generate(fs.readFileSync('./tests/12_input.json'),function(err,result){
        should.not.exist(err) ;
        should.equal(result.replace(/(\r\n|\n|\r)/gm,""),outputYML.toString().replace(/(\r\n|\n|\r)/gm,"")) ;
      });
      done() ;
    }) ;
  });
