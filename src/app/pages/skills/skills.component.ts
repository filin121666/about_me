import { Component, OnInit, inject } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { SkillComponent } from './components/skill/skill.component';
import { SkillsService } from '../../services/skills.service';
import { SkillsSection } from '../../shared/models/skill.interface';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { PageTitleService } from '../../services/page-title.service';

@Component({
    standalone: true,
    imports: [PageTitleComponent, SectionTitleComponent, SkillComponent],
    selector: 'app-skills',
    templateUrl: 'skills.component.html',
    styleUrl: 'skills.component.scss',
})

export class SkillsComponent implements OnInit {
    skills: SkillsSection[] = [];
    private pageTitleService = inject(PageTitleService);

    constructor(private skillsService: SkillsService) {}

    ngOnInit(): void {
        this.pageTitleService.setPageTitle('skills');
        this.skills = this.skillsService.getSkills();
    }
}