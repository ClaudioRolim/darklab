---
sidebar_position: 4
sidebar_label: Linux
---

# Linux
---

>> Most used commands in linux.

## Error Grub

1. View system partitions with _ls_ command:

```
grub> ls
```
_ex:_ (proc) (memdisk) (hd0) (hd1) (hd1,gpt1) (hd1,gpt2) (hd1,gpt3) (hd1,gpt4) (hd2) (hd2,gpt1)

2. Choose the partition that contains the boot file (for example we will use the **hd1,gpt1**):

```
grub> set root=(hd1,gpt2)
```

3. Set prefix boot:

```
grub> set prefix=(hd1,gpt2)/boot/grub
```

```
grub> insmod normal
```

```
grub> normal
```
