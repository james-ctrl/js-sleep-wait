# js-sleep-wait

## Description
javascript sleep, until and wait function

## Note
all the wait functions use a wait time inaccuracy.
e.g. sleep(2000, run\_func, args) maybe do run\_func(args) after 2000 milliseconds or after 2150 milliseconds, it will longer than 2000.

## Functions

### `wait_times_until(interval, times, is_true_func, run_func, args)`

wait (interval * times) milliseconds or the is\_true\_true() return true, then run the function run\_func with args.

is\_true\_func can be null if just wait.

e.g. wait\_times\until(1000, 10, null, function(args) {console.log(args)}, 'after 1000\*10 ms, show the message')


### `wait_until(ms, is_ture_func, run_func, args)`

wait ms milliseconds or is\_true\_func return true, then run the function run\_func(args).

This is syntactic sugar for wait\_times\_until. just split ms with interval 100 every time.

### `wait_do(ms, run_func, args)`

wait ms milliseconds, and do run\_func(args).

### sleep

alias of wait\_do().
