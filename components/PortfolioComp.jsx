import Image from "next/image";
import Footer from "./Footer";

export default function PortfolioComp() {
  return (
    <div className="comp min-h-lvh container mx-auto flex flex-col gap-6 p-5 text-right ">
      {/* نبذة عني ككاتب محتوى */}
      <div className="summry arabic-text flex flex-col">
        <h1 className="font-bold text-[22px] md:text-2xl">
          أنا أسرار أحمد مرير{" "}
          <span className="text-[#ffa600]">كاتبة محتوى</span>
        </h1>
        <p
          className={`
            text-md  arabic-text
            `}
        >
          متحمسة وأمتلك خبرة متنوعة في صياغة النصوص الإعلانية، إدارة وسائل
          التواصل الاجتماعي، وإنشاء المحتوى الرقمي. أسعى للاستفادة من مهاراتي
          الإبداعية وقدرتي على التواصل لإنتاج محتوى جذاب يعزز التفاعل مع الجمهور
          ويساهم في بناء العلامة التجارية. أهدف إلى دمج قدراتي الكتابية مع فهمي
          لاحتياجات الجمهور واستراتيجيات التسويق لتقديم حملات مؤثرة، تعزيز تجربة
          العملاء، ودعم نمو المؤسسة بشكل مستدام
        </p>
      </div>
      {/* كتابة المحتوى */}
      <p className="arabic-text leading-7">
        في عالم يمضي بسرعة نؤمن أن صوتك هو ما يوجّهنا نحو الأفضل فَكُل خدمة
        نقدمها أساسها يبدأ بك … و ينتهي برأيك إننا نستمع إليك لنتعلم منك و نطور
        من أجلك , في كل مرة , و مع كل تجربة فنحن لا نقدم خدمة فقط , نحن نبني
        علاقة تبدأ بثقتك
      </p>

      {/* مقال */}
      <p className="arabic-text leading-7">
        ليست رائحة بل ذاكرة عطر ميلسان رائحة تُحفر في الذاكرة لمسة خفيفة من
        الماضي ، تمتزج بالحاضر و تبقى حين يُلامس بشرتك ، كأنه يعيد ترتيب تفاصيلك
        في كل نفحة وعدٌ بالعودة إلى زمنٍ لم يغادر القلب أبداً
      </p>

      {/* أهمية رأي العميل */}
      <article className="arabic-text leading-7">
        <div>
          <h2 className="text-2xl text-gray-800 leading-10 font-bold">
            أهمية رأي العميل
          </h2>
          <div
            className="flex flex-col gap-5 max-sm:flex-col-reverse
            lg:flex-row lg:justify-center lg:items-center"
          >
            <div className="leading-7">
              في عالمٍ يتغير بسرعة لم تعد الشركات هي من تصنع القرار وحدها بل
              أصبح صوت العميل هو المحرك الحقيقي للتطور و التميز فكُل تجربة
              يعيشها و يشعر بها العميل, و كل كلمة يعبّر بها هي مفتاح لتحسين
              الخدمة و بناء الثقة التي تدوم...
              <p className="leading-7">
                الخلاصة .. رأي العميل ليس مجرد رقم في استبيان ولا تعليقًا عابرًا
                في صندوق الملاحظات بل هو صوت التجربة الذي يقود كل مؤسسة لنحو
                أفضل
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* قسم العطر + الصورة */}
      <article className="flex flex-col lg:justify-end md:flex-row gap-5">
       <div
  className="img rounded-md relative w-full h-[300px] overflow-hidden
    md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[400px] shrink-0"
>
  <Image
    fill
    src="/perfum.webp"
    alt="صورة العطر"
    loading="eager"   
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
        <div className="arabic-text leading-7">
          هل تبحث عن عطر يجمع بين الطابع الراقي واليومي ؟ 
          <p>
          عطر بولاريس .. عطر
          للجنسين المميز بمكوناته بنفحات البخور و التونكا
          </p>
        </div>
      </article>

      {/* النصوص الخاصة بالمنصات */}
      <div className="flex flex-col gap-5">
        <p className="arabic-text leading-7 flex flex-col gap-1">
          <strong>منصة الانتسغرام</strong>
          تألق بمجموعة الشتاء الفاخرة التي تمتاز بطابع الفخامة والأناقة...
        </p>

        <p className="arabic-text leading-7 flex flex-col gap-1">
          <strong>منصة أكس</strong>
          لأيام ليالي الشتاء الباردة حيث تصنع الذكريات الجميلة...
        </p>
      </div>

      {/* الصور الإضافية */}
      <div
        className="flex flex-col items-center gap-5
                md:flex-row lg:justify-center"
      >
        <div
          className="img rounded-md relative w-full h-[300px] overflow-hidden
                  md:w-full md:h-[350px] lg:w-[450px] lg:h-[400px]"
        >
          <Image
            fill
            src="/content.jpg"
            alt="صورة محتوى 1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className="img rounded-md relative w-full h-[300px] overflow-hidden
                  md:w-full md:h-[350px] lg:w-[450px] lg:h-[400px]"
        >
          <Image
            fill
            src="/content2.jpg"
            alt="صورة محتوى 2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

