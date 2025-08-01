import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [applications, setApplications] = useState([
    { id: 1, type: 'Продуктовая помощь', status: 'Рассматривается', progress: 60 },
    { id: 2, type: 'Материальная помощь', status: 'Одобрено', progress: 100 }
  ]);

  const helpTypes = [
    {
      title: 'Продуктовая помощь',
      description: 'Продуктовые наборы для семей с детьми',
      icon: 'ShoppingCart',
      color: 'bg-soft-green'
    },
    {
      title: 'Материальная помощь',
      description: 'Денежная поддержка в трудной ситуации',
      icon: 'CreditCard',
      color: 'bg-soft-blue'
    },
    {
      title: 'Медицинская помощь',
      description: 'Компенсация медицинских расходов',
      icon: 'Heart',
      color: 'bg-soft-pink'
    },
    {
      title: 'Школьная помощь',
      description: 'Помощь в подготовке к учебному году',
      icon: 'BookOpen',
      color: 'bg-soft-yellow'
    }
  ];

  const documents = [
    'Паспорт заявителя',
    'Справка о составе семьи',
    'Справка о доходах',
    'Свидетельства о рождении детей',
    'Документы, подтверждающие трудную жизненную ситуацию'
  ];

  const faqItems = [
    {
      question: 'Кто может обратиться за помощью?',
      answer: 'За помощью могут обратиться семьи, находящиеся в трудной жизненной ситуации, с доходом ниже прожиточного минимума.'
    },
    {
      question: 'Как долго рассматривается заявление?',
      answer: 'Заявления рассматриваются в течение 10 рабочих дней с момента подачи всех необходимых документов.'
    },
    {
      question: 'Как часто можно обращаться за помощью?',
      answer: 'Обращаться за помощью можно не чаще одного раза в квартал, за исключением экстренных случаев.'
    }
  ];

  const news = [
    {
      date: '15 декабря 2024',
      title: 'Новые меры поддержки семей с детьми',
      preview: 'Увеличен размер единовременной материальной помощи...'
    },
    {
      date: '10 декабря 2024',
      title: 'График работы в праздничные дни',
      preview: 'Информируем о изменениях в режиме работы...'
    }
  ];

  return (
    <div className="min-h-screen bg-soft-gray font-body">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Users" size={32} className="text-primary" />
              <h1 className="text-2xl font-heading font-bold text-primary">Центр поддержки семей</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#help" className="text-gray-600 hover:text-primary transition-colors">Виды помощи</a>
              <a href="#documents" className="text-gray-600 hover:text-primary transition-colors">Документы</a>
              <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">Вопросы</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">
                Мы рядом в трудную минуту
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Наш центр оказывает комплексную поддержку семьям, находящимся в сложной жизненной ситуации. 
                Мы поможем вам получить необходимую помощь быстро и с заботой.
              </p>
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-3">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Подать заявление
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Подача заявления</DialogTitle>
                      <DialogDescription>
                        Для подачи заявления обратитесь в наш офис с необходимыми документами или вызовите специалиста на дом.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <Button className="w-full">Записаться на прием</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="px-8 py-3">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Горячая линия
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/f1c7ce7b-e237-472a-bb13-622b0c08ecfb.jpg" 
                alt="Поддержка семей" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Cabinet */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">Личный кабинет</h3>
            <p className="text-gray-600">Отслеживайте статус ваших заявлений в реальном времени</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={24} />
                  Мои заявления
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{app.type}</h4>
                        <p className="text-sm text-gray-600">Заявление #{app.id}</p>
                      </div>
                      <Badge variant={app.status === 'Одобрено' ? 'default' : 'secondary'}>
                        {app.status}
                      </Badge>
                    </div>
                    <Progress value={app.progress} className="h-2" />
                    <p className="text-sm text-gray-600 mt-2">Готовность: {app.progress}%</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Types */}
      <section id="help" className="py-16 bg-soft-gray">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">Виды помощи</h3>
            <p className="text-gray-600">Мы предоставляем различные виды поддержки для семей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={type.icon} size={32} className="text-gray-700" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{type.description}</CardDescription>
                  <Button variant="outline" className="mt-4 w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold text-gray-800 mb-6">Необходимые документы</h3>
              <p className="text-gray-600 mb-8">
                Для получения помощи подготовьте следующие документы:
              </p>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-secondary" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать список документов
              </Button>
            </div>
            <div>
              <img 
                src="/img/2c13a0f2-697d-4ab7-81b5-636acba990d4.jpg" 
                alt="Документы" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">Часто задаваемые вопросы</h3>
            <p className="text-gray-600">Ответы на самые популярные вопросы</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* News */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">Новости и объявления</h3>
            <p className="text-gray-600">Актуальная информация и важные объявления</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.date}</Badge>
                    <Icon name="Calendar" size={16} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.preview}</p>
                  <Button variant="outline" size="sm">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4">Контактная информация</h3>
            <p className="text-primary-foreground/80">Мы всегда готовы помочь и ответить на ваши вопросы</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p>8 (800) 123-45-67</p>
              <p className="text-sm text-primary-foreground/80">Горячая линия 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p>ул. Социальная, 15</p>
              <p className="text-sm text-primary-foreground/80">Прием пн-пт 9:00-18:00</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p>help@family-support.ru</p>
              <p className="text-sm text-primary-foreground/80">Ответим в течение дня</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Users" size={28} />
              <span className="text-xl font-heading font-bold">Центр поддержки семей</span>
            </div>
            <p className="text-gray-400 mb-4">
              Помогаем семьям преодолевать трудности и строить лучшее будущее
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;