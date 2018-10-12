/**
 * node������
 */
 
var nodeServer = {
	/*���*/
	init: function(){
		this.initModule();//����ģ��
		this.initLogic();//ִ���߼�
	},
	/*ģ��*/
	initModule: function(){
		this.http = require('http');//http����
		this.fs = require('fs');//�ļ���������
		this.mime = require('mime');//�ļ������ж϶���
		this.url = require('url');//url��������
	},
	/*�߼�*/
	initLogic: function(){
		this.http.createServer(function(request, response){
			var urlObj = nodeServer.url.parse(request.url, true),//����urlΪ���󣬲���true�ǽ�queryҲת��Ϊ����
				pathName = urlObj.pathname;//·����
				
			//������ҳ
			if(pathName == '/'){
				//������Ӧ�����ͣ�����Ϊutf-8
				response.setHeader('Content-Type', 'text/html;charset=utf-8');
				//��ȡ�ļ������ݲ��ҽ�����������д�뵽��Ӧ��
				nodeServer.fs.readFile('index.html', function(err, data){
					response.write(data);//д����Ӧ��
					response.end();//����
				});
			}else{
				//������Ӧͷ������·����׺���ж�mime���͡�
				response.setHeader('Content-Type', nodeServer.mime.lookup(pathName) + ';charset=utf-8');
				//��ȡָ���ļ�
				nodeServer.fs.readFile(pathName.slice(1), function(err, data){
					response.write(data);
					response.end();
				});
			}
		}).listen(8080, 'localhost');
	}
}
/*ִ��*/
nodeServer.init();