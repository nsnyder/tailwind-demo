<template>
  <div>
    <div class="text-center">
      <div class="text-4xl text-green-700">
        <template v-if="!currentDate">
          Hover over a date for information.
        </template>
        <template v-else>
          You made {{ currentDate.commits }} commit{{ currentDate.commits !== 1 ? 's' : '' }} on {{ currentDate.formattedDate }}.
        </template>
      </div>
      <div class="inline-grid grid-flow-col grid-rows-8 auto-cols-min gap-1">
        <div v-for="(div, index) in gridDivs"
          :key="index"
          :class="div.classes"
          v-text="div.text"
          v-on="div.listeners || {}"
        />
      </div>

      <collapsible-code
        name="computeDateClasses"
        :code="functionToString('computeDateClasses')"
        :hidden-by-default="true"
      />

      <collapsible-code
        name="computeColumnSpanClass"
        :code="functionToString('computeColumnSpanClass')"
        :hidden-by-default="true"
      />

      <tailwind-config />
    </div>

    <div class="mt-4">
      <h3 class="text-lg font-bold">More resources:</h3>
      <ul>
        <li>
          <a href="https://github.com/FullHuman/purgecss-docs/blob/master/whitelisting.md">
            PurgeCSS: Whitelisting Documentation
          </a>
        </li>
        <li>
          <a href="https://v1.tailwindcss.com/docs/controlling-file-size#writing-purgeable-html">
            Tailwind: Writing Purgeable HTML
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import CollapsibleCode from '~/components/CollapsibleCode.vue';
  import TailwindConfig from '~/components/TailwindConfig.vue';
  import ExtractsCode from '~/mixins/ExtractsCode.js';
  import subYears from 'date-fns/subYears';
  import addDays from 'date-fns/addDays';
  import subDays from 'date-fns/subDays';
  import startOfToday from 'date-fns/startOfToday';
  import isSunday from 'date-fns/isSunday';
  import isToday from 'date-fns/isToday';
  import isBefore from 'date-fns/isBefore';
  import formatDate from 'date-fns/format';

  const examinedFunctions = {
    computeDateClasses: function(level) {
      const intensity = Math.min(Math.max(1, level), 9) * 100;
      const zoomDirection = 'in';

      // PurgeCSS doesn't know to keep `bg-green-*` classes, or `zoom-*` classes.
      // Note: Tailwind documentation actively discourages this!
      // https://v1.tailwindcss.com/docs/controlling-file-size#writing-purgeable-html
      return [`bg-green-${intensity}`, `zoom-${zoomDirection}`];
    },
    computeColumnSpanClass: function(weeksInMonth) {
      // PurgeCSS doesn't know to keep `col-span-*` classes.
      // Note: Tailwind documentation actively discourages this!
      // https://v1.tailwindcss.com/docs/controlling-file-size#writing-purgeable-html
      return `col-span-${weeksInMonth}`;
    }
  };

  export default {
    name: 'PurgeCSS',

    components: {
      CollapsibleCode,
      TailwindConfig,
    },

    mixins: [
      ExtractsCode
    ],

    data() {
      return {
        today: startOfToday(),
        examinedFunctions,
        currentDate: null,
      };
    },

    computed: {
      gridDivs: function() {
        const dayDivs = ['', 'Sun', '', '', 'Wed', '', '', 'Sat'].reduce((previous, current) => {
          previous.push({
            classes: 'bg-white text-xs',
            text: current
          });

          return previous;
        }, []);

        let currentIndex = 0;
        const completeDivs = this.monthsToColumnWidth.reduce((previous, current) => {
          previous.push({
            classes: [
              examinedFunctions.computeColumnSpanClass(current.width),
              'bg-white',
              'text-xs',
              'text-left',
            ],
            text: current.text,
          });

          const newIndex = Math.min(currentIndex + (current.width * 7), this.daysToCommits.length);
          const divs = previous.concat(this.daysToCommits.slice(currentIndex, newIndex).map(e => ({
            date: e.date,
            commits: e.commits,
            classes: e.customClasses.concat(
              'h-4',
              'w-4',
              'border'
            ),
            text: '',
            listeners: {
              mouseenter: () => {
                this.currentDate = Object.assign({}, e, { formattedDate: formatDate(e.date, 'MMMM do, yyyy')});
              },
              mouseleave: () => {
                this.currentDate = null;
              }
            }
          })));

          currentIndex = newIndex;

          return divs;
        }, dayDivs);

        return completeDivs;
      },
      startDate: function() {
        let startDate = subYears(this.today, 1);
        while (!isSunday(startDate)) {
          startDate = subDays(startDate, 1);
        }

        return startDate;
      },
      daysToCommits: function() {
        let date = this.startDate;
        const days = [];

        while (!isToday(date)) {
          const commits = Math.ceil(Math.random() * 10);
          days.push({
            date,
            commits,
            customClasses: this.computeDateClasses(commits, true),
          });
          date = addDays(date, 1);
        }

        return days;
      },
      monthsToColumnWidth: function() {
        const monthData = [];
        const today = startOfToday();
        let date = this.startDate;
        const totalColumns = Math.ceil((this.daysToCommits.length / 7));
        let handledColumns = 0;

        while (isBefore(date, today)) {
          let element = {
            text: '',
            width: 0
          };

          const getFormattedMonth = _ => formatDate(date, 'MMM');
          let currentMonth = getFormattedMonth();
          while (getFormattedMonth() === currentMonth) {
            date = addDays(date, 7);
            element.width++;
          }

          // Make sure the columns don't overflow.
          if (handledColumns + element.width > totalColumns) {
            element.width = totalColumns - handledColumns;
          }

          if (element.width > 2) {
            element.text = currentMonth;
          }

          handledColumns += element.width;
          monthData.push(element);
        }

        return monthData;
      }
    },

    methods: {
      setLevel: function(newLevel) {
        this.level = Math.min(Math.max(1, newLevel), 9);
      },
      computeDateClasses: examinedFunctions.computeDateClasses
    }
  }
</script>
