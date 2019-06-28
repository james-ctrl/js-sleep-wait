# js-sleep-wait

## 描述
javascript sleep, until and wait function

## 注意

所提供的的wait类函数都不是精确计时的。
比如：sleep(2000, run\_func, args) 可能会在2000毫秒或者2150毫秒后运行run\_func(args)，延迟时间总会高于给定值2000。

## 函数

### `wait_times_until(interval, times, is_true_func, run_func, args)`

等待 (interval * times) 毫秒 或者 the is\_true\_true() 返回true后, 执行run\_func(args)。

is\_true\_func 为等待时的判断函数，不接受参数。如何为null，则只等待给定时间。

例如：wait\_times\until(1000, 10, null, function(args) {console.log(args)}, 'after 1000\*10 ms, show the message')


### `wait_until(ms, is_ture_func, run_func, args)`

等待ms毫秒后，或者is\_true\_func()返回true，执行 run\_func(args)。

这是wait\_times\_until的语法糖。只是将ms分为100毫秒间隔的ms/100次。

### `wait_do(ms, run_func, args)`

等待ms毫秒后执行run\_func(args)。

### sleep

wait\_do()的别名。
