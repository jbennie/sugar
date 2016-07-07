import { should } from 'chai'
should();

describe('dom', () => {

    beforeEach(() => {

        const div = document.createElement('div');
        document.body.appendChild(div);

    });

    describe('closest', () => {
        it('should find something...', () => {
            const coco = 'hello world';
            coco.should.be.a('string');
        });
    });
});
