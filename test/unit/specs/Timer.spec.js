import {shallow} from 'vue-test-utils';
import Vue from 'vue';
import Timer from '@/components/Timer.vue';

Vue.component('timer', Timer);

describe('Timer.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(Timer);
    cmp.vm.now = Math.trunc(Date.now() / 1000);
  });

  it('should display N/A if end is not defined', () => {
    expect(cmp.vm.remains).to.equal('N/A');
  });

  it('should display 00:00:00 if end is past', () => {
    cmp.setProps({
      end: '2000-01-01T00:00:00.000Z'
    });
    expect(cmp.vm.remains).to.equal('00:00:00');
  });

  it('should update remains after 1 second', (done) => {
    const now = new Date();
    const end = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    cmp.setProps({
      end: end.toISOString()
    });

    cmp.vm.$mount();
    expect(cmp.vm.remains).to.be.oneOf(['24:00:00', '23:59:59']);

    window.setTimeout(() => {
      expect(cmp.vm.remains).to.be.oneOf(['23:59:59', '23:59:58']);
      done();
    }, 1000);
  });
});
