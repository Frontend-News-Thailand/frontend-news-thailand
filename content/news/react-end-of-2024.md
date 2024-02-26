---
createdDate: 26/02/2024
tags: react
username: runyasak
head:
  image:
    src: /news/react-end-of-2024/og.jpg
    type: image/jpeg
    width: 1200
    height: 617
---

![image alt text](/news/react-end-of-2024/image-1.jpg){width="720" height="325" sizes="100vw md:720" preload fetchpriority="high"}

# สรุปสิ่งที่เราจะได้เห็น React ในปี 2024

เมื่ออาทิตย์ที่ผ่านมาทางทีมผู้พัฒนา React ได้เผยถึงแผนการพัฒนาที่เราจะได้เห็น React ณ ขณะนี้ เรียกได้ว่าเป็นที่จับตาและน่าตื่นเต้นสำหรับชาว React และ Web Developer เป็นอย่างมาก

วันนี้เราจะมาสรุปกันว่า มีอะไรที่น่าสนใจสำหรับ React ในปีนี้กันบ้าง

## บอกลา `useMemo` และ `useCallback` พร้อมต้อนรับ React Compiler

ต้องบอกว่าเราได้ยินโปรเจค [React Compiler มาตั้งแต่ปี 2021 ที่งาน React Conf 2021](https://www.youtube.com/watch?v=lGEMwh32soc) และก็มีการพูดถึงอีกครั้งเมื่อปีที่แล้ว พร้อมกับ concept ของ [React Forget](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#document-metadata) สืบเนื่องมาจากปัญหาของ React ที่มีการ re-render ซ้ำแล้วซ้ำเล่า เมื่อ state มีการเปลี่ยนแปลง ซึ่งต้องแก้ปัญหาด้วย `useMemo` และ `useCallback`

ด้วยพลังของ React Compiler จะช่วยเรา optimize ในส่วนของ memoization เหล่านี้ให้ในระดับหนึ่ง แต่ก็ยังคงสามารถ manual memoization เองได้อยู่นะ

อย่างไรก็ตามทางผู้พัฒนาก็แนะนำให้ใช้ Strict Mode และ ESLint plugin เพื่อให้ code ของเรานั้นรองรับกับ feature ใหม่ที่กำลังจะมาพร้อมกับ React Compiler อีกด้วย

เรียกได้ว่าเอาใจคนที่ชอบลืม `useMemo` หรือไม่ได้ทำ memoization ก็ไม่ต้องกลัวว่าจะ re-render รัว ๆ แล้วนะ

## Actions

ด้วยการมาของ Server Components ทำให้ component ของเรานั้นสามารถ fetch ข้อมูลหรือทำงานติดต่อกับ server ที่ระดับ server ได้เลย และด้วย `action` ที่เราจะได้ใช้กันนี้ จะเป็น function ใช้ในการติดต่อระหว่าง client กับ server ที่สำคัญคือรองรับทั้ง client และ `use server` ด้วยนะ

ความพีคอีกอย่างคือ `action` พี่แกนี้รองรับ synchronous และ asynchronous ซึ่งในการ submit จะอยู่ภายใต้ของ transition ระหว่าง page นั่นหมายความว่าจะรองรับกับ `async/await` ระหว่างรอ และยังมี `isPending` ให้ใช้เช็คระหว่างที่ page นั้นกำลัง fetch ข้อมูลอยู่หรือเปล่าด้วยนะ

## ทดลองใช้ Features ใหม่ใน React Canary

ล่าสุดทางทีม React ได้เปิดตัว [React Canaries](https://react.dev/blog/2023/05/03/react-canaries) ที่จะมี feature ใหม่ที่กำลังจะ stable ในอีกไม่ช้า ก่อนที่จะ release ในแต่ละ stable version

ก่อนหน้านี้ กว่าที่เราจะได้ใช้ feature ใหม่ ๆ ของ React จะต้องรอ stable version นั้นออกมา ซึ่งการมาของ Canaries จะทำให้ได้รับความคิดเห็นจาก community และผู้คนได้มากขึ้น และทำให้ง่ายต่อการ finalize feature นั้น ๆ

โดย feature ที่อยู่ใน React Canary ณ ตอนนี้ได้แก่

* Directives (`use client`, `use server`)

* Document Metadata

* Asset Loading

* Actions

---

เรียกได้ว่าการมาของ React ในปีนี้เป็นที่น่าจับตามองมาก เราจะได้เห็น community และผู้พัฒนาเริ่มพูดถึง feature ใหม่ของ React กันมากในช่วงนี้ คาดว่า React 19 น่าจะมาในปลายปีนี้ เราต้องมาติดตามกันต่อไป


## Refs
* https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024
* https://twitter.com/acdlite/status/1758229889595977824
